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
        ->where('roles.slug', '<>', 'super-admin');

        if(!is_null($request->page) && !is_null($request->perPage)){
            $role = $role->forPage($request->page, $request->perPage);
        }
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
            $FieldData = [];
            foreach($request->roleFields as $field){
                if($field['role_id'] == '0'){
                    $field['role_id'] = $role->id;
                    $FieldData[] = [
                        'title' => $field['title'],
                        'field_type_id' => $field['field_type_id'],
                        'validation_rule' => $field['validation_rule'],
                        'role_id' => $role->id,
                        'created_at' => now(),
                        'field_value' => isset($field['field_value'])? $field['field_value'] : null,
                        'required' => $field['required'],
                        'is_default_field' => $field['is_default_field'],
                    ];
                }
                else{
                    try{
                    $validation = [];
                    $ft = FieldType::find($field['field_type_id']);
                    // dd($ft);    
                    if(isset($field['required']) && $field['required'] == 1){
                        $validation[] = "required";
                    }
                    if($ft->slug == 'string'){
                        $validation[] = "string";
                    }
                    if($ft->slug == 'number'){
                        $validation[] = "number";
                    }
                    if($ft->slug == 'float'){
                        $validation[] = "float";
                    }
                    if($ft->slug == 'date'){
                        $validation[] = "date";
                    }
                    if($ft->slug == 'file'){
                        $validation[] = "file";
                    }
                    // if($ft->slug == 'enum'){
                    //     $field['field_value'] = "file";
                    // }
                    $FieldData[] = [
                        'title' => $field['title'],
                        'field_type_id' => $field['field_type_id'],
                        'validation_rule' => implode('|', $validation),
                        'role_id' => $role->id,
                        'created_at' => now(),
                        'field_value' => isset($field['field_value'])? $field['field_value'] : null,
                        'required' => $field['required'],
                        'is_default_field' => 0,
                    ];
                }
                catch(\Exception $e){
                    dd($e,$field, $ft, implode('|', $validation));
                }
                    

                }
            }
            Field::insert($FieldData);
            // dd("FieldData",$FieldData);
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




            $FieldData = [];
            Field::where('role_id', $role->id)->delete();
            foreach($request->roleFields as $field){
                if($field['role_id'] == '0'){
                    $field['role_id'] = $role->id;
                    $FieldData[] = [
                        'title' => $field['title'],
                        'field_type_id' => $field['field_type_id'],
                        'validation_rule' => $field['validation_rule'],
                        'role_id' => $role->id,
                        'created_at' => now(),
                        'field_value' => isset($field['field_value'])? $field['field_value'] : null,
                        'required' => $field['required'],
                        'is_default_field' => $field['is_default_field'],
                    ];
                }
                else{
                    try{
                    $validation = [];
                    $ft = FieldType::find($field['field_type_id']);
                    // dd($ft);    
                    if(isset($field['required']) && $field['required'] == 1){
                        $validation[] = "required";
                    }
                    if($ft->slug == 'string'){
                        $validation[] = "string";
                    }
                    if($ft->slug == 'number'){
                        $validation[] = "number";
                    }
                    if($ft->slug == 'float'){
                        $validation[] = "float";
                    }
                    if($ft->slug == 'date'){
                        $validation[] = "date";
                    }
                    if($ft->slug == 'file'){
                        $validation[] = "file";
                    }
                    // if($ft->slug == 'enum'){
                    //     $field['field_value'] = "file";
                    // }
                    $FieldData[] = [
                        'title' => $field['title'],
                        'field_type_id' => $field['field_type_id'],
                        'validation_rule' => implode('|', $validation),
                        'role_id' => $role->id,
                        'created_at' => now(),
                        'field_value' => isset($field['field_value'])? $field['field_value'] : null,
                        'required' => $field['required'],
                        'is_default_field' => 0,
                    ];
                }
                catch(\Exception $e){
                    dd($e,$field, $ft, implode('|', $validation));
                }
                    

                }
            }
            Field::insert($FieldData);
            
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
                DB::raw("
                    Case When field_types.slug = 'string' then 'AAAAAA' 
                     When field_types.slug = 'integer' then 123 
                     When field_types.slug = 'float' then '78.34' 
                     When field_types.slug = 'boolean' then 1 
                     When field_types.slug = 'date' then '2023-12-24' 
                     When field_types.slug = 'enum' then 'Male' 
                     When field_types.slug = 'datetime' then '2023-12-24 11:00:00' END
                as value")
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
