<?php

namespace App\Http\Controllers;

use App\Models\ClassSectionMaster;
use App\Models\StudentMasterAttendance as ModelsStudentMasterAttendance;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class StudentMasterAttendance extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $MasterAttendance = ModelsStudentMasterAttendance::where(function ($query) use ($request) {
            if (!empty($request->date)) {
                $query->where('student_master_attendances.attendance_date',  $request->date );
            }
            if (!empty($request->class)) {
                $query->where('student_master_attendances.class_id',  $request->class );
            }
        })
            ->select('student_master_attendances.*', DB::raw('count(*) OVER() AS total_row_count')) //phpcs:ignore
            ->forPage($request->page, $request->perPage)->get();

        if (count($MasterAttendance) > 0) {
            return response(['data' => $MasterAttendance, 'status' => 'success'], 200);
        } else {
            return response(['status' => 'success', 'data' => $MasterAttendance, 'message' => 'no data found', 'code' => 200], 200);
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
        //
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
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
    public function checkClassSection($id){
        $classID = null;
        $sectionID = null;
        $class =ClassSectionMaster::find($id);
        if($class->parent_id!=0){
           $classID = $class->parent_id;
           $sectionID=$class->id;
        }else{
            $classID = $class->id;
            $sectionID = null;

        }
        return response(['class_id' => $classID, 'section_id' => $sectionID, 'status' => 'success'], 200);
    }
}
