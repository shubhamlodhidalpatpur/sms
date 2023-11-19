<?php

namespace App\Http\Controllers;
use App\Models\Attendance;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
class AttendanceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // dd(Auth::guard('api')->user());
        $Attendance=Attendance::leftJoin('org_entities', 'org_entities.id', 'attendances.user_id')->select('attendances.*', 'org_entities.name as user_name', DB::raw('count(*) OVER() AS total_row_count'))->get();
        return response(['status' => 'success','data'=>$Attendance,'message'=> 'no data found','code' => 200], 200);

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
    public function checkinAttendance()
    {   

        try {
            $currentDate= Carbon::now()->toDateString();;
            $CheckinAttandence = Attendance::whereDate('attendance_date',$currentDate)->where('user_id',1)->first();
            if($CheckinAttandence){
                $attendance = Attendance::find($CheckinAttandence->id);
                $attendance->checkin_time=Carbon::now();
                $attendance->user_id=1;
                $attendance->attendance_date=Carbon::now();
                $attendance->save();
            }else{
                $attendance = new Attendance;
                $attendance->checkin_time=Carbon::now();
                $attendance->attendance_date=Carbon::now();
                $attendance->user_id=1;
                $attendance->save();
    
            }
        } catch (\Exception $e) {
            return response(['status' => false, 'message' => 'Something went wrong! Please Try Again Later.'], 500);
        }
        return response(['status' => true, 'message' => 'Check in SuccessFully'], 200);
    }
    public function checkOutAttendance()
    {   

        try {
            $currentDate= Carbon::now()->toDateString();;
            $CheckoutAttandence = Attendance::whereDate('attendance_date',$currentDate)->where('user_id',1)->first();
            if($CheckoutAttandence){
                $attendance = Attendance::find($CheckoutAttandence->id);
                $attendance->checkout_time=Carbon::now();
                $attendance->user_id=1;
                $attendance->attendance_date=Carbon::now();
                $attendance->save();
            }else{
                $attendance = new Attendance;
                $attendance->checkout_time=Carbon::now();
                $attendance->attendance_date=Carbon::now();
                $attendance->user_id=1;
                $attendance->save();
    
            }
        } catch (\Exception $e) {
            return response(['status' => false, 'message' => 'Something went wrong! Please Try Again Later.'], 500);
        }
        return response(['status' => true, 'message' => 'Check Out SuccessFully'], 200);
    }
    public function checkTodayAttendance()
    {
        $currentDate= Carbon::now()->toDateString();;
        $Attandence = Attendance::whereDate('attendance_date',$currentDate)->where('user_id',1)->first();
        return response(['status' => true, 'data'=>$Attandence, 'message' => 'Check Out SuccessFully'], 200);

    }
    
    
}
