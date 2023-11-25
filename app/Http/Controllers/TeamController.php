<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\OrgStructure;
use App\Models\OrganizationEntity;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Auth;
class TeamController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $Department = OrganizationEntity::leftJoin('org_structures', 'org_structures.id', 'org_entities.org_entity_type_id')//phpcs:ignore
                ->where(function ($query) use ($request) {
                    if (!empty($request->name)) {
                        $query->where('org_entities.name', 'like', '%' . $request->name . '%');
                    }
                    if (!empty($request->branch)) {
                        $query->where('org_entities.parent_id', 'like', '%' . $request->department . '%');
                    }
                })
                ->leftjoin('org_entities as parent', 'parent.id', 'org_entities.parent_id')
                ->select('org_entities.id', 'org_entities.name as title', 'parent.name as department_name', DB::raw('count(*) OVER() AS total_row_count'))//phpcs:ignore
                ->where('org_structures.slug', 'team')
                ->forPage($request->page, $request->perPage);
                if(strtolower($request->sortBy) == 'name'){
                    $Department = $Department->orderBy('org_entities.name', $request->sortDesc == 'true'?'DESC':'ASC');
                }
                if(strtolower($request->sortBy) == 'department'){
                    $Department = $Department->orderBy('department.name', $request->sortDesc == 'true'?'DESC':'ASC');
                }
                else{
                    $Department = $Department->orderBy('org_entities.id', 'desc');
                }


        $Department = $Department->get();

        if (count($Department) > 0) {
            return response(['data' => $Department, 'status' => 'success'], 200);
        } else {
            return response(['status' => 'success','data'=>$Department,'message'=> 'no data found','code' => 200], 200);
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
            'team_name'=>'required',
            'department'=> 'required ',
        ]);
        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->messages(), 'code' => 422], 422);
        }

        try {
            DB::beginTransaction();

            $entity_type = OrgStructure::where('slug', 'team')->first();

            $OrganizationEntity = new OrganizationEntity();
            $OrganizationEntity->name =  $request->team_name;
            $OrganizationEntity->parent_id =$request->department;
            $OrganizationEntity->reporting_head = 0;
            $OrganizationEntity->org_entity_type_id =!is_null($entity_type)? $entity_type->id : 0;
            $OrganizationEntity->status = 'A';
            $OrganizationEntity->save();
            DB::commit();
            return response(['data'=>' Team create successfully!','status'=>'success'], 200);
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
                ->select('id', 'name as title','parent_id as department_id')->first();//phpcs:ignore
        return response(['data' => $team, 'status' => 'success'], 200);
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'team_name'=> 'required',
            'department'=> 'required ',
        ]);

        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->messages(), 'code' => 422], 422);
        }
        try {
            DB::beginTransaction();
            $OrganizationEntity = OrganizationEntity::find($id);
            $OrganizationEntity->name = $request->team_name;
            $OrganizationEntity->reporting_head = 0;
            $OrganizationEntity->parent_id = !is_null($request->department)? $request->department : 0;
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
    public function getDepartment()
    {
        $data=[];
        $data['department']= OrganizationEntity::leftJoin('org_structures', 'org_structures.id', 'org_entities.org_entity_type_id')//phpcs:ignore
        ->select('org_entities.name as label', 'org_entities.id as value')
        ->where('org_structures.slug', 'department')->get();
        return $data;
    }
}
