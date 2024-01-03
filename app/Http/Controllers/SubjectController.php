<?php

namespace App\Http\Controllers;

use App\Models\Subject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class SubjectController extends Controller
{
    public function index(Request $request)
    {
       
        $Subject = Subject::where(function ($query) use ($request) {
                if (!empty($request->name)) {
                    $query->where('name', 'like', '%' . $request->name . '%');
                }
            })
            ->select('subjects.*', DB::raw('count(*) OVER() AS total_row_count'));
        if (!is_null($request->page) && !is_null($request->perPage)) {
            $Subject = $Subject->forPage($request->page, $request->perPage);
        }
            
        if(is_null($request->sortBy)){
            $Subject = $Subject->orderBy('subjects.id', 'desc')->get();
        }
        else{
            $Subject = $Subject->orderBy('subjects.name', $request->sortDesc == 'true'?'DESC':'ASC')->get();
        }
        if (count($Subject) > 0) {
            return response(['data' => $Subject, 'status' => 'success'], 200);
        } else {
            return response(['status' => 'success','data'=>$Subject,'message'=> 'no data found','code' => 200], 200);
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
           
            $Subject = new Subject();
            $Subject->name = $request->name;
            $Subject->save();

        } catch (\Exception $e) {
             report($e);
             DB::rollback();
             return response(['data'=>'Something Went Wrong','status'=>'failure'], 500);
        }

        DB::commit();
        return response(['data' => 'Subject Added Successfully!', 'status' => 'success'], 200);
    }
    public function edit($id)
    {
        $BU=Subject::where('id', $id)->select('id', 'name')->first();//phpcs:ignore
        return response(['data' => $BU, 'status' => 'success'], 200);
    }
    public function update(Request $request, $id)
    {

        $validator = Validator::make($request->all(), [
            'name'=> 'required'
        ]);
        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->messages(), 'code' => 422], 422);
        }
        try {
            DB::beginTransaction();
    
            $Subject= Subject::find($id);
            $Subject->name=$request->name;
            $Subject->save();

            DB::commit();
            return response(['data' => $Subject, 'status' => 'success'], 200);
        } catch (\Exception $e) {
             report($e);
             DB::rollback();
             return response(['data'=>'Something Went Wrong','status'=>'failure'], 500);
        }
        

        return response(['data'=>'Subject update Successfully!','status'=>'success'], 200);
    }
    public function destroy($id)
    {
        $BU=Subject::where('id', $id)->delete();
        return response(['status'=>'success', 'message'=>'Subject Deleted successfully'], 200);
    }
    public function getSubject()
    {
        $data = Subject::select('subjects.name as label', 'subjects.id as value')->get();
            return response(['data' => $data, 'status' => 'success'], 200);
    }

}
