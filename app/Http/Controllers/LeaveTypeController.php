<?php

namespace App\Http\Controllers;

use App\Models\LeaveType;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LeaveTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $LeaveType = LeaveType::where(function ($query) use ($request) {
            if (!empty($request->name)) {
                $query->where('leave_types.name', 'like', '%' . $request->name . '%');
            }
        })
            ->select('leave_types.*', DB::raw('count(*) OVER() AS total_row_count')) //phpcs:ignore
            ->forPage($request->page, $request->perPage)->get();

        if (count($LeaveType) > 0) {
            return response(['data' => $LeaveType, 'status' => 'success'], 200);
        } else {
            return response(['status' => 'success', 'data' => $LeaveType, 'message' => 'no data found', 'code' => 200], 200);
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
            'name' => 'required',
            'deduction' => 'required ',
        ]);
        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->messages(), 'code' => 422], 422);
        }

        try {
            DB::beginTransaction();
            $LeaveType = new LeaveType();
            $LeaveType->name =  $request->name;
            $LeaveType->deduction = $request->deduction;
            $LeaveType->allotment = $request->allotment;
            $LeaveType->allotment_type = $request->allotment_type;
            $LeaveType->laps = $request->laps;
            $LeaveType->max_allotment_count = $request->max_allotment_count;
            $LeaveType->save();
            DB::commit();
            return response(['data' => ' Leave Type create successfully!', 'status' => 'success'], 200);
        } catch (\Exception $e) {
            report($e);
            DB::rollback();
            return response(['data' => 'Something Went Wrong', 'status' => 'success'], 500);
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
        $LeaveType = LeaveType::find($id);
        return response(['data' => $LeaveType, 'status' => 'success'], 200);
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
            'name' => 'required',
            'deduction' => 'required ',
        ]);
        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->messages(), 'code' => 422], 422);
        }

        try {
            DB::beginTransaction();
            $LeaveType = LeaveType::find($id);
            $LeaveType->name =  $request->name;
            $LeaveType->deduction = $request->deduction;
            $LeaveType->allotment = $request->allotment;
            $LeaveType->allotment_type = $request->allotment_type;
            $LeaveType->laps = $request->laps;
            $LeaveType->max_allotment_count = $request->max_allotment_count;
            $LeaveType->save();
            DB::commit();
            return response(['data' => ' Leave Type Updated successfully!', 'status' => 'success'], 200);
        } catch (\Exception $e) {
            report($e);
            DB::rollback();
            return response(['data' => 'Something Went Wrong', 'status' => 'success'], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $LeaveType=LeaveType::where('id', $id)->delete();
        return response(['status'=>'success', 'message'=>'Leave Type Deleted successfully'], 200);
    }
}
