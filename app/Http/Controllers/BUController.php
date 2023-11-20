<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Models\BU;
use App\Models\OrganizationEntity;
use App\Models\OrgStructure;
use Illuminate\Support\Facades\DB;
use Auth;

class BUController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
       
        $BU = OrganizationEntity::leftJoin('org_structures', 'org_structures.id', 'org_entities.org_entity_type_id')//phpcs:ignore
            ->where(function ($query) use ($request) {
                if (!empty($request->name)) {
                    $query->where('org_entities.name', 'like', '%' . $request->name . '%');
                }
            })
            ->select('org_entities.id', 'org_entities.name as title', DB::raw('count(*) OVER() AS total_row_count'))//phpcs:ignore
            ->where('org_structures.slug', 'bu');
        if (!is_null($request->page) && !is_null($request->perPage)) {
            $BU = $BU->forPage($request->page, $request->perPage);
        }
            
        if(is_null($request->sortBy)){
            $BU = $BU->orderBy('org_entities.id', 'desc')->get();
        }
        else{
            $BU = $BU->orderBy('org_entities.name', $request->sortDesc == 'true'?'DESC':'ASC')->get();
        }
        if (count($BU) > 0) {
            return response(['data' => $BU, 'status' => 'success'], 200);
        } else {
            return response(['status' => 'success','data'=>$BU,'message'=> 'no data found','code' => 200], 200);
        }
    }

    public function store(Request $request)
    {
    
        $validator = Validator::make($request->all(), [
            'name'=> 'required',
        ]);
        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->messages(), 'code' => 422], 422);
        }

        DB::beginTransaction();

        try {
            $organization = OrganizationEntity::leftJoin('org_structures', 'org_structures.id', 'org_entities.org_entity_type_id')//phpcs:ignore
                            ->where('slug', 'organization')
                            ->select('org_entities.*')
                            ->first();
        
            $OrganizationEntity = new OrganizationEntity();
            $OrganizationEntity->name = $request->name;
            $OrganizationEntity->reporting_head = 0;
            $OrganizationEntity->parent_id = $organization != null? $organization->id : 0;
            $OrganizationEntity->org_entity_type_id = OrgStructure::where('slug', 'bu')->first()->id;
            $OrganizationEntity->status = 'A';
            $OrganizationEntity->save();

        } catch (\Exception $e) {
            dd($e);
             report($e);
             DB::rollback();
             return response(['data'=>'Something Went Wrong','status'=>'failure'], 500);
        }

        DB::commit();
        return response(['data' => 'BU Added Successfully!', 'status' => 'success'], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
       
        $BU=OrganizationEntity::where('id', $id)->select('id', 'name as title')->first();//phpcs:ignore
        return response(['data' => $BU, 'status' => 'success'], 200);
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

        $BU= OrganizationEntity::find($id);
        $validator = Validator::make($request->all(), [
            'name'=> 'required'
        ]);
        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->messages(), 'code' => 422], 422);
        }
        try {
            DB::beginTransaction();
    
            $BU= OrganizationEntity::find($id);
            $BU->name=$request->name;
            $BU->save();

            DB::commit();
            return response(['data' => $BU, 'status' => 'success'], 200);
        } catch (\Exception $e) {
            dd($e);
             report($e);
             DB::rollback();
             return response(['data'=>'Something Went Wrong','status'=>'failure'], 500);
        }
        

        return response(['data'=>'BU update Successfully!','status'=>'success'], 200);
    }


    public function statusUpdate($id)
    {
        //phpcs:ignore                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
        $user = DB::table('BUs')->select('status')->where('id', $id)->first();
        if ($user->status == 'Active') {
            $status = 'Inactive';
        } else {
            $status = 'Active';
        }
        $value = array('status' => $status);
        DB::table('BUs')->where('id', $id)->update($value);

        return response(['status'=>'success', 'message'=>'status updated successfully'], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $BU= OrganizationEntity::find($id);
        $BU=BU::where('id', $BU->master_table_data_id)->delete();
        $BU=OrganizationEntity::where('id', $id)->delete();
        return response(['status'=>'success', 'message'=>'BU Deleted successfully'], 200);
    }
    public function userData()
    {

    //    $employee=  Employee::leftJoin('designations','designations.id'
    // ,'employees.designation_id')->select('employees.id as value',
    //    DB::raw('CONCAT(UCASE(LEFT(employees.employee_name, 1)),
    //  LCASE(SUBSTRING(employees.employee_name, 2)), " (", designations.title,")") as label')
    //    )->get();
    //    return $employee;
    //   $user = User::select('users.id as value','users.name as label')->get();
        $user = OrganizationEntity::select('organization_entities.id as value', 'organization_entities.name as label')
                ->leftJoin('org_structure', 'org_structure.id', 'organization_entities.org_entity_type_id')
                ->leftJoin('employees', 'employees.user_id', 'organization_entities.master_table_data_id')
                ->leftJoin('designations', 'designations.id', 'employees.designation_id')
                ->where('org_structure.slug', 'individual')
                // ->whereIn('designations.slug',['individual',)
                ->get();
        return $user;
    }

    public function viewBU($id)
    {
      
        // ->leftjoin('employees','employees.user_id','organization_entities.master_table_data_id')
        // ->leftjoin('users_roles','employees.user_id','users_roles.user_id')
        // ->leftjoin('roles_permissions','roles_permissions.role_id','users_roles.role_id')
        // ->leftjoin('permissions','roles_permissions.permissions_id','permissions.id')
        
        $data = [];
        $data['BU']=OrganizationEntity::where('organization_entities.id', $id)
        ->select('organization_entities.id', 'organization_entities.name')
        ->first();
        $data['BU_hods'] = OrganizationEntity::join('employees', 'employees.user_id', 'organization_entities.master_table_data_id')//phpcs:ignore
                    ->leftJoin('org_structure', 'org_structure.id', 'organization_entities.org_entity_type_id')
                    ->join('users_roles', 'employees.user_id', 'users_roles.user_id')
                    ->join('roles_permissions', 'roles_permissions.role_id', 'users_roles.role_id')
                    ->join('permissions', 'roles_permissions.permission_id', 'permissions.id')
                    ->select('organization_entities.id', 'organization_entities.name')
                    ->where('employees.BU_id', $id)
                    ->where('permissions.slug', 'BU')
                    ->where('org_structure.slug', 'individual')
                    ->get();
        
        

        $data['team'] = OrganizationEntity::leftjoin('teams', 'teams.id', 'organization_entities.master_table_data_id')
        ->leftJoin('org_structure', 'org_structure.id', 'organization_entities.org_entity_type_id')
        ->where('org_structure.slug', 'team')
        ->where('teams.BU_id', $id)->select('organization_entities.name')->get();

        $data['totalteam'] = OrganizationEntity::leftjoin('teams', 'teams.id', 'organization_entities.master_table_data_id')//phpcs:ignore
        ->leftJoin('org_structure', 'org_structure.id', 'organization_entities.org_entity_type_id')
        ->where('org_structure.slug', 'team')
        ->where('teams.BU_id', $id)->select('organization_entities.name')->count();
       
        $data['BUs'] = OrganizationEntity::leftJoin('users as u', 'u.id', 'organization_entities.master_table_data_id')//phpcs:ignore
        ->leftJoin('roles', 'roles.id', 'u.role_id')
        ->leftJoin('org_structure', 'org_structure.id', 'organization_entities.org_entity_type_id')
        ->where('roles.BU_id', $id)
         ->where('roles.slug', 'hod')
         ->where('org_structure.slug', 'individual')
        ->select('organization_entities.name')
        ->first();
      
        
        return response(['data' => $data, 'status' => 'success'], 200);
    }
}
