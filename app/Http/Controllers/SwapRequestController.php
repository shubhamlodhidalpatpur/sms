<?php

namespace App\Http\Controllers;

use App\Models\Attendance;
use App\Models\SwapRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use DB;
use Illuminate\Support\Carbon;

class SwapRequestController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $SwapRequest=SwapRequest::leftJoin('org_entities as requester', 'requester.id', 'swap_requests.request_user_id')->leftJoin('org_entities as approver', 'approver.id', 'swap_requests.approver')->select('swap_requests.*', 'requester.name as requester_name','approver.name as approver_name', DB::raw('count(*) OVER() AS total_row_count'))->get();
        return response(['status' => 'success','data'=>$SwapRequest,'message'=> 'no data found','code' => 200], 200);
        
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
            'request_date' => 'required',
            'in_out_mode' => 'required',
            'reason' => 'required',
        ]);
        if ($validator->fails()) {
            return response(['status'=>true,'message'=> implode(', ', $validator->errors()->all()),
            'errors' => $validator->errors(),'code' => 422], 422);
        }
        $SwapRequest = new SwapRequest();
        $SwapRequest->request_date=$request->request_date;
        $SwapRequest->mode=$request->in_out_mode;
        $SwapRequest->in_time=$request->in_time;
        $SwapRequest->out_time=$request->out_time;
        $SwapRequest->request_user_id=1;
        $SwapRequest->reason=$request->reason;
        $SwapRequest->status='inprogress';
        $SwapRequest->save();
        return response([ 'message' => 'Swap Request Add Successfully','status' => true], 200);

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
    public function CheckswapRequest()
    {
        $SwapRequest=SwapRequest::leftJoin('org_entities as requester', 'requester.id', 'swap_requests.request_user_id')
        ->leftJoin('org_entities as approver', 'approver.id', 'swap_requests.approver')
        ->select('swap_requests.*', 'requester.name as requester_name','approver.name as approver_name', DB::raw('count(*) OVER() AS total_row_count'))
        ->where('swap_requests.status','inprogress')->get();
        return response(['status' => 'success','data'=>$SwapRequest,'message'=> 'no data found','code' => 200], 200);
        
    }
    public function changeSwapRequestStatus($id, $status)
    {
        $swaprequest = SwapRequest::find($id);

        if ($status == 'approved') {
            if($swaprequest->mode=='in'){
              $attendance=Attendance::where('user_id',$swaprequest->request_user_id)->whereDate('attendance_date',$swaprequest->request_date)->first();
              
                if($attendance){
                    $attendance->checkin_time=$swaprequest->request_date.' '.$swaprequest->in_time;
                    $attendance->status='approved';
                    $attendance->save();
                }else{
                    $attendance = new Attendance();
                    $attendance->checkin_time=$swaprequest->request_date.' '.$swaprequest->in_time;
                    $attendance->status='approved';
                    $attendance->user_id=$swaprequest->request_user_id;
                    $attendance->attendance_date=$swaprequest->request_date;
                    $attendance->save();

                }
            }elseif($swaprequest->mode=='out'){
                $attendance=Attendance::where('user_id',$swaprequest->request_user_id)->whereDate('attendance_date',$swaprequest->request_date)->first();
                if($attendance){
                    $attendance->checkout_time=$swaprequest->request_date.' '.$swaprequest->out_time;
                    $attendance->status='approved';
                    $attendance->save();
                }else{
                    $attendance = new Attendance();
                    $attendance->checkout_time=$swaprequest->request_date.' '.$swaprequest->out_time;
                    $attendance->status='approved';
                    $attendance->user_id=$swaprequest->request_user_id;
                    $attendance->attendance_date=$swaprequest->request_date;
                    $attendance->save(); 

                }

            }else{
                $attendance= new Attendance;
                $attendance->checkout_time=$swaprequest->request_date.' '.$swaprequest->out_time;
                $attendance->checkin_time=$swaprequest->request_date.' '.$swaprequest->in_time;
                $attendance->status='approved';
                $attendance->user_id=1;
                $attendance->attendance_date=$swaprequest->request_date;
                $attendance->save();
            }
            $swaprequest->status = 'approved';
        } else {
            $swaprequest->status = 'rejected';
        }
        $swaprequest->approver=1;
        $swaprequest->save();
        return response([
                'data'=> $swaprequest,
                'message' => 'Status Change succesfully',
                'status' => true
        ], 200);
    }
}
