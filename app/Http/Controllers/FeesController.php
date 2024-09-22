<?php

namespace App\Http\Controllers;

use App\Models\AdmissionFee;
use App\Models\ClassFee;
use App\Models\ClassSectionMaster;
use App\Models\InstallmentFee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Auth;
use Illuminate\Support\Str;

class FeesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $FeesList = ClassFee::leftjoin('class_section_masters as child','child.id','class_fees.class_id')
        ->leftJoin('class_section_masters as parent', 'parent.id', '=', 'child.parent_id')
        ->select(
            DB::raw("IF(child.parent_id != 0, CONCAT(child.name, '(', parent.name, ')'), child.name) as class_name"),
            'class_fees.*', DB::raw('count(*) OVER() AS total_row_count')
        )->forPage($request->page, $request->perPage)->get(); 
        if (count($FeesList) > 0) {
            return response(['data' => $FeesList, 'status' => 'success'], 200);
        } else {
            return response(['status' => 'success', 'data' => $FeesList, 'message' => 'no data found', 'code' => 200], 200);
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
        // dd($request->all());
        $validator = Validator::make($request->all(), [
            'class' => 'required',
            'fees_type' => 'required',

        ]);
        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->messages(), 'code' => 422], 422);
        }

        try {
            DB::beginTransaction();
                foreach($request->Addmission_payments as $admisionFee){
                    if($admisionFee['amount']!=null){
                        $AdmissionFee = new AdmissionFee();
                        $AdmissionFee->fees_type = $admisionFee['id'];
                        $AdmissionFee->amount = $admisionFee['amount'];
                        $AdmissionFee->class_id = $request->section?$request->section:$request->class;
                        $AdmissionFee->save();
                    }
                }
                $installMentAmount=null;
                $InstallMentCount=0;
                foreach($request->installment_payments as $installmentFee){
                    if($installmentFee['amount']!=null){
                        $installMentAmount+=$installmentFee['amount'];
                        $InstallMentCount+=1;
                        $InstallmentFee = new InstallmentFee();
                        $InstallmentFee->amount = $installmentFee['amount'];
                        $InstallmentFee->class_id = $request->section?$request->section:$request->class;
                        $InstallmentFee->from_date = $installmentFee['from_date'];
                        $InstallmentFee->till_date = $installmentFee['till_date'];
                        $InstallmentFee->remark = $installmentFee['remark'];
                        $InstallmentFee->save();
                    }
                }
                $ClassFees = new ClassFee();
                $ClassFees->class_id = $request->section?$request->section:$request->class;
                $ClassFees->addmission_total_amount =$request->AddmisionTotalAmmount;
                $ClassFees->installment_total_amount =$installMentAmount;
                $ClassFees->installment_total_count =$InstallMentCount;
                $ClassFees->fees_total_amount =$installMentAmount+$request->AddmisionTotalAmmount;
                $ClassFees->save();
            

           
        } catch (\Exception $e) {
            dd($e);
            report($e);
            DB::rollback();
            return response(['message' => 'Something Went Wrong', 'status' => 'failure'], 500);
        }
        DB::commit();
        return response(['message' => 'Fees Added Successfully!', 'status' => 'success'], 200);
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
        $ClassFee = ClassFee::find($id);
        $ClassFee['AdmissionFee']=AdmissionFee::leftjoin('admission_types','admission_types.id','admission_fees.fees_type')->select('admission_fees.amount','admission_types.title as paymentType','admission_types.id','admission_fees.id as main_id')->where('class_id',$ClassFee->class_id)->get();
        $ClassFee['InstallmentFee']=InstallmentFee::where('class_id',$ClassFee->class_id)->select('installment_fees.from_date','installment_fees.till_date','installment_fees.amount','installment_fees.remark')->get();
        $class = ClassSectionMaster::where('id',$ClassFee->class_id)->first();
        if($class->parent_id!=0){
            $ClassFee->section_id =$class->id;
            $ClassFee->class_id =$class->parent_id;
            
        }else{
            $ClassFee->class_id =$class->id;
        }
        return response(['data' => $ClassFee, 'status' => 'success'], 200);

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
    public function AdmissionFees(){
        $AddmissionFees=DB::table('admission_types')->where('status','A')->select('title as paymentType','amount','id')->get();
        return response(['status'=>'success','data'=>$AddmissionFees, 'message'=>'Team Deleted successfully'], 200);
    }
}
