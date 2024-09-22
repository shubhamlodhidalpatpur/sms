<?php

namespace App\Http\Controllers;

use App\Models\Department;
use Illuminate\Http\Request;
use App\Models\OrgStructure;
use App\Models\OrganizationEntity;
use App\Models\Team;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Auth;
use Illuminate\Support\Str;
class TeamController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $team = Team::leftjoin('departments', 'departments.id', 'teams.department_id')

        ->where(function ($query) use ($request) {

            if (!empty($request->name)) {
                $query->where('teams.title', 'like', '%' . $request->name . '%');
            }
            if (!empty($request->department)) {
                $query->where('teams.department_id', 'like', '%' . $request->department . '%');
            }
            // dd($request->all());
        })->select(
            'teams.id',
            'teams.title as team_name',
            'teams.department_id as department_id',
            'departments.title as department',
            DB::raw('count(*) OVER() AS total_row_count')
        )
        ->orderBy($request->sortBy ?? 'teams.id', $request->sortDesc == 'true' ? 'DESC' : 'ASC')
        ->forPage($request->page, $request->perPage)


        ->get();
    if (count($team) > 0) {
        return response(['message' => 'Team Fetch Successfully!','data' => $team, 'status' => 'success'], 200);
    } else {
        return response(['status' => 'success','data'=>$team,
            'message' => 'Something Went Wrong','code' => 200], 200);
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


            $team=new Team;
            $team->title=$request->team_name;
            $team->department_id=$request->department;
            $team->slug=Str::slug($request->team_name, '-');
            $team->save();
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
        $data= Team::find($id);
        return response(['data'=>$data, 200]);
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
            $team=Team::find($id);
            $team->title=$request->team_name;
            $team->department_id=$request->department;
            $team->slug= Str::slug($request->team_name, '-');
            $team->save();
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
        $Team=Team::where('id', $id)->delete();
        return response(['status'=>'success', 'message'=>'Team Deleted successfully'], 200);
    }
    public function getTeamFromdepartmentId($id){

        $Team = Team::select('id as value', 'title as label')
            ->where('teams.department_id', $id)
            ->get();
        return response(['data' => $Team, 'status' => 'success'], 200);
    }
    public function getDepartment()
    {
        $data=[];
        $data['department'] = Department::select('id as value', 'title as label')->get();
        return response($data, 200);
    }
}
