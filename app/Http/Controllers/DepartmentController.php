<?php

namespace App\Http\Controllers;

use App\Models\Department;
use Illuminate\Http\Request;
use App\Models\OrganizationEntity;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Auth;
use Illuminate\Support\Str;
class DepartmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query = Department::query();

        if (!empty($request->name)) {
              $query->where('departments.title', 'like', '%' . $request->name . '%');
        }

        $department = $query->select(
            'departments.id',
            'departments.title as title',
            'departments.status as status',
            DB::raw('count(*) OVER() AS total_row_count')
        )
        ->orderBy($request->sortBy ?? 'departments.id', $request->sortDesc == 'true' ? 'DESC' : 'ASC')
        ->forPage($request->page, $request->perPage)
        ->get();
        if (count($department) > 0) {
              return response(['data' => $department, 'status' => 'success'], 200);
        } else {
             return response([
            'status' => 'success', 'data' => $department,
            'message' => 'no data found', 'code' => 200
            ], 200);
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
            'department_name' => 'required',
        ]);
        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->messages(), 'code' => 422], 422);
        }

        try {
            DB::beginTransaction();

            $department = new Department();
            $department->title = $request->department_name;
            $department->slug = Str::slug($request->department_name, '-');
            $department->save();
        } catch (\Exception $e) {
            dd($e);
            report($e);
            DB::rollback();
            return response(['message' => 'Something Went Wrong', 'status' => 'failure'], 500);
        }
        DB::commit();
        return response(['message' => 'Department Added Successfully!', 'status' => 'success'], 200);
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
        $data = Department::where('id', $id)->first();

        return response(['data' => $data], 200);
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'department_name'=> 'required',
        ]);

        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->messages(), 'code' => 422], 422);
        }
        try {
            DB::beginTransaction();
            $department = Department::find($id);
            $department->title = $request->department_name;
            $department->slug = Str::slug($request->department_name, '-');
            $department->save();
            DB::commit();
            return response(['status' => 'success'], 200);
        } catch (\Exception $e) {
            dd($e);
            report($e);
            DB::rollback();
            return response(['data'=>'Something Went Wrong','status'=>'success'], 500);
        }


        return response(['data'=>'Department update Successfully!','status'=>'success'], 200);
    }




    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $Team=Department::where('id', $id)->delete();
        return response(['status'=>'success', 'message'=>'Team Deleted successfully'], 200);
    }
    public function getBranch()
    {
        $data=[];
        $data['branch']= OrganizationEntity::leftJoin('org_structures', 'org_structures.id', 'org_entities.org_entity_type_id')//phpcs:ignore
        ->select('org_entities.name as label', 'org_entities.id as value')
        ->where('org_structures.slug', 'branch')->get();
        return $data;
    }
}
