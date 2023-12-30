<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use App\Models\Holiday;

class HolidayController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $holiday = Holiday::where(function ($query) use ($request) {
                    if (!empty($request->name)) {
                        $query->where('holidays.holiday_name', 'like', '%' . $request->name . '%');
                    }
                    if (!empty($request->date)) {
                        $query->where('holidayes.date', $request->date);
                    }
                })
                ->select('holidays.*',DB::raw('count(*) OVER() AS total_row_count'))//phpcs:ignore
                ->forPage($request->page, $request->perPage)->get();

        if (count($holiday) > 0) {
            return response(['data' => $holiday, 'status' => 'success'], 200);
        } else {
            return response(['status' => 'success','data'=>$holiday,'message'=> 'no data found','code' => 200], 200);
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
            'holiday_name'=>'required',
            'date'=> 'required ',
        ]);
        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->messages(), 'code' => 422], 422);
        }

        try {
            DB::beginTransaction();
            $Holiday = new Holiday();
            $Holiday->holiday_name =  $request->holiday_name;
            $Holiday->date =$request->date;
            $Holiday->save();
            DB::commit();
            return response(['data'=>' Holiday create successfully!','status'=>'success'], 200);
        } catch (\Exception $e) {
            report($e);
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

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $holiday = Holiday::find($id);
        return response(['data' => $holiday, 'status' => 'success'], 200);
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
            'holiday_name'=>'required',
            'date'=> 'required ',
        ]);
        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->messages(), 'code' => 422], 422);
        }

        try {
            DB::beginTransaction();
            $Holiday = Holiday::find($id);
            $Holiday->holiday_name =  $request->holiday_name;
            $Holiday->date =$request->date;
            $Holiday->save();
            DB::commit();
            return response(['data'=>' Holiday Updated successfully!','status'=>'success'], 200);
        } catch (\Exception $e) {
            report($e);
            DB::rollback();
            return response(['data'=>'Something Went Wrong','status'=>'success'], 500);
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
        $Holiday=Holiday::where('id', $id)->delete();
        return response(['status'=>'success', 'message'=>'Holiday Deleted successfully'], 200);
    }
}
