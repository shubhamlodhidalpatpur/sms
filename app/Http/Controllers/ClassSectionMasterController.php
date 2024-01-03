<?php

namespace App\Http\Controllers;

use App\Models\ClassSectionMaster;
use App\Models\ClassSectionType;
use App\Models\ClassSubject;
use App\Models\Subject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class ClassSectionMasterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $classsection = ClassSectionMaster::leftJoin('class_section_types', 'class_section_types.id', 'class_section_masters.class_section_type_id')
            ->where('class_section_types.slug','class')
            ->select('class_section_masters.*')->with('children')->withCount('children')->get();
        return response(['data' => $classsection, 'status' => 'success'], 200);
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
        $classsection = ClassSectionMaster::find($id)->delete();
        return response(['data' =>"delete successfuly", 'status' => 'success'], 200);
    }
    public function ClassStore(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
        ]);
        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->messages(), 'code' => 422], 422);
        }

        DB::beginTransaction();

        try {
            $ClassSectionMaster = new ClassSectionMaster();
            $ClassSectionMaster->name = $request->name;
            $ClassSectionMaster->parent_id = 0;
            $ClassSectionMaster->class_section_type_id = ClassSectionType::where('slug', 'class')->first()->id;
            $ClassSectionMaster->status = 'A';
            $ClassSectionMaster->save();
        } catch (\Exception $e) {
            report($e);
            DB::rollback();
            return response(['data' => 'Something Went Wrong', 'status' => 'failure'], 500);
        }
        DB::commit();
        return response(['data' => 'Class Added Successfully!', 'status' => 'success'], 200);
    }
    public function SectionStore(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'class' => 'required',
        ]);
        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->messages(), 'code' => 422], 422);
        }

        DB::beginTransaction();

        try {
            $ClassSectionMaster = new ClassSectionMaster();
            $ClassSectionMaster->name = $request->name;
            $ClassSectionMaster->parent_id = $request->class;
            $ClassSectionMaster->class_section_type_id = ClassSectionType::where('slug', 'section')->first()->id;
            $ClassSectionMaster->status = 'A';
            $ClassSectionMaster->save();
        } catch (\Exception $e) {
            report($e);
            dd($e);
            DB::rollback();
            return response(['data' => 'Something Went Wrong', 'status' => 'failure'], 500);
        }
        DB::commit();
        return response(['data' => 'Section Added Successfully!', 'status' => 'success'], 200);
    }
    public function getClass()
    {
        $data = [];
        $data['class'] = ClassSectionMaster::leftJoin('class_section_types', 'class_section_types.id', 'class_section_masters.class_section_type_id') //phpcs:ignore
            ->select('class_section_masters.name as label', 'class_section_masters.id as value')
            ->where('class_section_types.slug', 'class')->get();
        return $data;
    }
    public function classEdit($id){
        $classsection = ClassSectionMaster::find($id);
       return response(['data' => $classsection, 'status' => 'success'], 200);
    }
    public function ClassUpdate(Request $request,$id)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
        ]);
        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->messages(), 'code' => 422], 422);
        }

        DB::beginTransaction();

        try {
            $ClassSectionMaster = ClassSectionMaster::find($id);
            $ClassSectionMaster->name = $request->name;
            $ClassSectionMaster->save();
        } catch (\Exception $e) {
            report($e);
            DB::rollback();
            return response(['data' => 'Something Went Wrong', 'status' => 'failure'], 500);
        }
        DB::commit();
        return response(['data' => 'Class Updated Successfully!', 'status' => 'success'], 200);
    }
    public function SectionUpdate(Request $request,$id)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'class' => 'required',
        ]);
        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->messages(), 'code' => 422], 422);
        }

        DB::beginTransaction();

        try {
            $ClassSectionMaster = ClassSectionMaster::find($id);
            $ClassSectionMaster->name = $request->name;
            $ClassSectionMaster->parent_id = $request->class;
            $ClassSectionMaster->save();
        } catch (\Exception $e) {
            report($e);
            DB::rollback();
            return response(['data' => 'Something Went Wrong', 'status' => 'failure'], 500);
        }
        DB::commit();
        return response(['data' => 'Section Updated Successfully!', 'status' => 'success'], 200);
    }
    public function getClassSection()
    {
        $data = ClassSectionMaster::leftJoin('class_section_types', 'class_section_types.id', 'class_section_masters.class_section_type_id') //phpcs:ignore
            ->select('class_section_masters.name as label', 'class_section_masters.id as value')->get();
            return response(['data' => $data, 'status' => 'success'], 200);
    }
    public function AssignSubject(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'class' => 'required',
            'subject' => 'required',
        ]);
        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->messages(), 'code' => 422], 422);
        }

        DB::beginTransaction();

        try {
            $class=ClassSubject::where('class_id',$request->class)->delete();
            foreach($request->subject as $sub){
                $ClassSubjects = new ClassSubject;
                $ClassSubjects->subject_id =$sub;
                $ClassSubjects->class_id =$request->class;
                $ClassSubjects->save();

            }
        } catch (\Exception $e) {
            report($e);
            dd($e);
            DB::rollback();
            return response(['data' => 'Something Went Wrong', 'status' => 'failure'], 500);
        }
        DB::commit();
        return response(['data' => 'Subject Assign Successfully!', 'status' => 'success'], 200);
    }
    public function AssignSubjectListing()
    {
        $data = ClassSectionMaster::leftJoin('class_section_types', 'class_section_types.id', 'class_section_masters.class_section_type_id') //phpcs:ignore
            ->select('class_section_masters.*')->whereNotNull('subject')->get();

        foreach($data as $item){
            $data['subject']=Subject::whereIn('id',json_decode($item->subject))->get();
        }    
        return response(['data' => $data, 'status' => 'success'], 200);
    }

    public function getSubjects($id)
    {
        $data = ClassSubject::where('class_id',$id)->pluck('subject_id')->toArray();  
        return response(['data' => $data, 'status' => 'success'], 200);
    }
    
    
}
