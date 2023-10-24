<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Department;
use App\Models\Team;
use App\Models\Role;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Str;

use App\Models\Tenant\RolesPermission;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $role=Role::leftjoin('org_entities as org_en', 'org_en.id', 'roles.department_id')
        ->leftjoin('org_entities as or_en', 'or_en.id', 'roles.department_id')
        ->leftjoin('roles as rol', 'rol.id', 'roles.parent_id')
        ->where(function ($query) use ($request) {
            if (!empty($request->role)) {
                $query->where('roles.name', 'like', '%' . $request->role . '%');
            }
            if (!empty($request->department_id)) {
                $query->where('roles.department_id', 'like', '%' . $request->department_id . '%');
            } if (!empty($request->team_id)) {
                $query->where('roles.department_id', 'like', '%' . $request->team_id . '%');
            }
        })
        ->select('rol.name as rol', 'roles.*', 'org_en.name as title', 'or_en.name as team_name', DB::raw('count(*) OVER() AS total_row_count'))//phpcs:ignore
        ->forPage($request->page, $request->perPage)
        ->where('roles.slug', '<>', 'super-admin');
        if(strtolower($request->sortBy) == 'role'){
            $role = $role->orderBy('roles.name', $request->sortDesc == 'true'?'DESC':'ASC');
        }
        if(strtolower($request->sortBy) == 'reporting_role'){
            $role = $role->orderBy('rol.name', $request->sortDesc == 'true'?'DESC':'ASC');
        }
        if(strtolower($request->sortBy) == 'department'){
            $role = $role->orderBy('org_en.name', $request->sortDesc == 'true'?'DESC':'ASC');
        }
        else{
            $role = $role->orderBy('roles.id', 'desc');
        }

        $role = $role->get();


        return response($role, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {


        $validator = Validator::make(
            $request->all(),
            [
            'name'=> 'required| max:40',
            'department'=>'required ',
            'reporting_role'=>'required ',
            // 'team'=>'required ',
            ],
            [
              'reporting_role.required'  => 'The role name field is required'
            ]
        );
        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->messages(), 'code' => 422], 422);
        }
            $error = [];
            $RoleValidation = DB::table('roles')
                                ->where('department_id', $request->department)
                                ->where('name', $request->name)
                                ->first();
        if (!is_null($RoleValidation)) {
            return response(['errors' => ['name' => [' The Role Name Already Exit For This Department ']], 'code' => 422], 422);//phpcs:ignore
        }
            DB::beginTransaction();
        try {
            $role=new Role;
            $role->name=$request->name;
            $role->slug=Str::slug($request->name, '-');
            $role->department_id=$request->department;
            $role->parent_id=$request->reporting_role;
            $role->save();
        } catch (\Exception $e) {
            dd($e);
            report($e);
            DB::rollback();
            return response(['data'=>'Something Went Wrong','status'=>'success'], 500);
        }
            DB::commit();
        return response(['status'=>'Created  Successfully'], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {

        $role=Role::leftjoin('org_entities', 'org_entities.id', 'roles.department_id')
        ->where('roles.id', $id)
        ->select('roles.*', 'org_entities.name as team') ->first();
        ;
        return response(['data' => $role, 'status' => 'success'], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        $validator = Validator::make($request->all(), [
            'name'=> 'required|max:40',
            'department'=>'required ',
            'reporting_role'=>'required ',

        ]);
        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->messages(), 'code' => 422], 422);
        }
            $error = [];
            $RoleValidation = DB::table('roles')->where('department_id', $request->department)->where('roles.id', '!=', $id)//phpcs:ignore
            ->select('roles.name')->get();
        foreach ($RoleValidation as $role) {
            if ($role->name==$request->name) {
                $error = array_merge($error, ['name' => [' The Role Name Already Exit For This Department ']]);
            }    if ($error != []) {
                return response(['errors' => $error, 'code' => 422], 422);
            }
        }
            DB::beginTransaction();
        try {
            $role=role::find($id);
            $role->name=$request->name;
            $role->slug=$request->name;
            $role->department_id=$request->department;
            $role->parent_id=$request->reporting_role;
           // $role->team_id=$request->team;
            $role->save();
        } catch (\Exception $e) {
            dd($e);
            report($e);
            DB::rollback();
            return response(['data'=>'Something Went Wrong','status'=>'success'], 500);
        }
            DB::commit();
            return response(['data' => $role, 'status' => 'success'], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $Team=Role::where('id', $id)->delete();
        return response(['status'=>'success', 'message'=>'Role Deleted successfully'], 200);
    }

    public function teamoption($id)
    {

        $role = Team::select('teams.id as value', 'teams.title as label')->where('department_id', $id)->get();
        return response($role, 200);
    }
    public function suparAdmin()
    {

        $role = Role::where('slug', 'Super Admin ')->first();
        return response($role, 200);
    }
    public function getRoleFromdepartmentId($id)
    {
        $role=Role::select('id as value', 'name as label')->where('department_id', $id)
        ->orWhere('slug', 'super-admin')
        ->get();
        if (count($role)==0) {
            $role=[["value"=>1,"label"=>'Super Admin']];
        }
        return response(['data' => $role, 'status' => 'success'], 200);
    }

}
