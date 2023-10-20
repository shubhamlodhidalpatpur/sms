<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\OrgStructure;
use App\Models\OrganizationEntity;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Auth;
class BranchController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $branch = OrganizationEntity::leftJoin('org_structures', 'org_structures.id', 'org_entities.org_entity_type_id')//phpcs:ignore
                ->where(function ($query) use ($request) {
                    if (!empty($request->name)) {
                        $query->where('org_entities.name', 'like', '%' . $request->name . '%');
                    }
                    if (!empty($request->BU)) {
                        $query->where('org_entities.parent_id', 'like', '%' . $request->BU . '%');
                    }
                })
                ->leftjoin('org_entities as parent', 'parent.id', 'org_entities.parent_id')
                ->select('org_entities.id', 'org_entities.name as title', 'parent.name as bu_name', DB::raw('count(*) OVER() AS total_row_count'))//phpcs:ignore
                ->where('org_structures.slug', 'branch')
                ->forPage($request->page, $request->perPage);
                if(strtolower($request->sortBy) == 'name'){
                    $branch = $branch->orderBy('org_entities.name', $request->sortDesc == 'true'?'DESC':'ASC');
                }
                if(strtolower($request->sortBy) == 'bu'){
                    $branch = $branch->orderBy('bu.name', $request->sortDesc == 'true'?'DESC':'ASC');
                }
                else{
                    $branch = $branch->orderBy('org_entities.id', 'desc');
                }


        $branch = $branch->get();

        if (count($branch) > 0) {
            return response(['data' => $branch, 'status' => 'success'], 200);
        } else {
            return response(['status' => 'success','data'=>$branch,'message'=> 'no data found','code' => 200], 200);
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

        $validator = Validator::make($request->all(), [
            'branch_name'=>'required',
            'BU'=> 'required ',
        ]);
        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->messages(), 'code' => 422], 422);
        }


        $error = [];
        $TeamExists = OrganizationEntity::where('parent_id', $request->BU)
                        ->where('name', $request->branch_name)
                        ->first();
        if (!is_null($TeamExists)) {
            $error = array_merge($error, ['branch_name' => [' The Team Name Already Exist For This Branch ']]);
        }
        if ($error != []) {
            return response(['errors' => $error, 'code' => 422], 422);
        }


        try {
            DB::beginTransaction();

            $entity_type = OrgStructure::where('slug', 'branch')->first();

            $OrganizationEntity = new OrganizationEntity();
            $OrganizationEntity->name =  $request->branch_name;
            $OrganizationEntity->parent_id =$request->BU;
            $OrganizationEntity->org_entity_type_id =!is_null($entity_type)? $entity_type->id : 0;
            $OrganizationEntity->status = 'A';
            $OrganizationEntity->save();
            DB::commit();
            return response(['data'=>' Branch create successfully!','status'=>'success'], 200);
        } catch (\Exception $e) {
            report($e);
            dd($e);
            DB::rollback();
            return response(['data'=>'Something Went Wrong','status'=>'success'], 500);
        }
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
        $team = OrganizationEntity::where('id', $id)
                ->select('id', 'name as title','parent_id as bu_id')->first();//phpcs:ignore
        return response(['data' => $team, 'status' => 'success'], 200);
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'branch_name'=> 'required',
            'BU'=> 'required ',
        ]);


        $error = [];
        $TeamExists = OrganizationEntity::where('parent_id', $request->BU)
                        ->where('name', $request->branch_name)
                        ->where('id', '<>', $id)
                        ->first();
        if (!is_null($TeamExists)) {
            $error = array_merge($error, ['branch_name' => [' The Branch Name Already Exist For This BU ']]);
        }
        if ($error != []) {
            return response(['errors' => $error, 'code' => 422], 422);
        }

        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->messages(), 'code' => 422], 422);
        }
        try {
            DB::beginTransaction();
            $OrganizationEntity = OrganizationEntity::find($id);
            $OrganizationEntity->name = $request->branch_name;
            $OrganizationEntity->parent_id = !is_null($request->BU)? $request->BU : 0;
            $OrganizationEntity->status = 'A';
            $OrganizationEntity->updated_at = now();
            $OrganizationEntity->save();
            DB::commit();
            return response(['status' => 'success'], 200);
        } catch (\Exception $e) {
            dd($e);
            report($e);
            DB::rollback();
            return response(['data'=>'Something Went Wrong','status'=>'success'], 500);
        }


        return response(['data'=>'Team update Successfully!','status'=>'success'], 200);
    }




    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $Team=OrganizationEntity::where('id', $id)->delete();
        return response(['status'=>'success', 'message'=>'Team Deleted successfully'], 200);
    }
    public function getBUData()
    {
        $data=[];
        $data['BU']= OrganizationEntity::leftJoin('org_structures', 'org_structures.id', 'org_entities.org_entity_type_id')//phpcs:ignore
        ->select('org_entities.name as label', 'org_entities.id as value')
        ->where('org_structures.slug', 'bu')->get();
        return $data;
    }
    public function fetchTeamData($id)
    {
        $data = [];
        $data['team_id']=OrganizationEntity::where('organization_entities.id', $id)
        ->select('organization_entities.id', 'organization_entities.name')
        ->first();
        $data['team_managers'] = OrganizationEntity::join('employees', 'employees.user_id', 'organization_entities.master_table_data_id')//phpcs:ignore
        ->leftJoin('org_structure', 'org_structure.id', 'organization_entities.org_entity_type_id')
        ->leftJoin('employee_pivots', 'employee_pivots.organization_entities_id', 'organization_entities.id')
        ->join('users_roles', 'employees.user_id', 'users_roles.user_id')
        ->join('roles_permissions', 'roles_permissions.role_id', 'users_roles.role_id')
        ->join('permissions', 'roles_permissions.permission_id', 'permissions.id')
        ->select('organization_entities.id', 'organization_entities.name')
        ->where('employee_pivots.parent_org_id', $id)
        ->where('permissions.slug', 'team')
        ->where('org_structure.slug', 'individual')
        ->get();
        if ($data['team_managers']!=null) {
            $data['team_member_count']=EmployeePivot::leftjoin('organization_entities', 'organization_entities.id', 'employee_pivots.organization_entities_id')//phpcs:ignore
            ->where('employee_pivots.parent_org_id', $id)->select('organization_entities.id')->count();

            $data['team_member']=EmployeePivot::leftjoin('organization_entities', 'organization_entities.id', 'employee_pivots.organization_entities_id')//phpcs:ignore
            ->where('employee_pivots.parent_org_id', $id)->select('organization_entities.name')->get();
        }

        return response(['data' => $data, 'status' => 'success'], 200);
    }
}
