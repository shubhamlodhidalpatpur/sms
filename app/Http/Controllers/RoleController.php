<?php

namespace App\Http\Controllers;

use App\Models\Field;
use App\Models\FieldType;
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
        $team = Role::join('departments', 'roles.department_id', 'departments.id')
            ->join('roles as role_r', 'role_r.id', 'roles.parent_id')
            ->where(function ($query) use ($request) {
                if (!empty($request->name)) {
                    $query->where('roles.name', 'like', '%' . $request->name . '%');
                }
                if (!empty($request->department)) {
                    $query->where('roles.department_id', 'like', '%' . $request->department . '%');
                }
            })->select(
                'roles.id',
                'roles.name as role',
                'roles.department_id as department_id',
                'departments.title as department',
                'role_r.name as reporting_role',
                DB::raw('count(*) OVER() AS total_row_count')
            )
            ->orderBy($request->sortBy ?? 'roles.id', $request->sortDesc == 'true' ? 'DESC' : 'ASC')
            ->forPage($request->page, $request->perPage)
            ->get();
        if (count($team) > 0) {
            return response(['data' => $team, 'status' => 'success'], 200);
        } else {
            return response(['status' => 'success', 'data' => $team, 'message' => 'no data found', 'code' => 200], 200);
        }
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
        $role->roleFields = $this->getFieldsByRole($id);
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

    public function getReportingtoFromemployeeId($id){
        $RoleData=array();
        $RepRole = Role::find($id);
        do {
            $RepRole = Role::find($RepRole->parent_id);
            array_push($RoleData, array('value'=>$RepRole->id,'label'=>$RepRole->name));
        } while ($RepRole->parent_id != 0);
        return response(['data' =>$RoleData, 'status' => 'success'], 200);

        
    }
    public function getReportingToFromRoleId($id){
        $RoleData=array();
        $RepRole = Role::find($id);
        do {
            $RepRole = Role::find($RepRole->parent_id);
            array_push($RoleData, array('value'=>$RepRole->id,'label'=>$RepRole->name));
        } while ($RepRole->parent_id != 0);
        return response(['data' =>$RoleData, 'status' => 'success'], 200);

        
    }

    public function getFieldsByRole($role_id = 0)
    {
        $trace = debug_backtrace(DEBUG_BACKTRACE_IGNORE_ARGS);
        $fields = Field::where('role_id', $role_id)
            ->leftJoin('field_types','field_types.id','fields.field_type_id')
            // ->orWhere('role_id', 0)
            ->select(
                'fields.*',
                'field_types.title as field_type',
                'field_types.slug as field_type_slug',
            )
            ->get();
        if(isset($trace[1]['function']) && $trace[1]['function'] == 'callAction'){
            return response(['data' => $fields, 'status' => 'success'], 200);
        }
        else{
            return $fields;
        }
        
    }

    public function getFieldTypes()
    {
        $fieldType = FieldType::get();
        return response(['data' => $fieldType, 'status' => 'success'], 200);
    }

}
