<?php

namespace App\Http\Controllers;

use App\Models\ClassSectionMaster;
use App\Models\ClassSubject;
use App\Models\EmployeeCount;
use App\Models\Teacher;
use App\Models\User;
use App\Models\Role;
use App\Models\UserRole;
use Illuminate\Http\Request;
use DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class TeacherController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        
        $Teacher = Teacher::where(function ($query) use ($request) {
            if (!empty($request->name)) {
                $query->where('teachers.irst_name', 'like', '%' . $request->first_name . '%');
            }
        })
            ->select('teachers.*', DB::raw('count(*) OVER() AS total_row_count')) //phpcs:ignore
            ->forPage($request->page, $request->perPage)->get();

        if (count($Teacher) > 0) {
            return response(['data' => $Teacher, 'status' => 'success'], 200);
        } else {
            return response(['status' => 'success', 'data' => $Teacher, 'message' => 'no data found', 'code' => 200], 200);
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
            'first_name' => 'required',
            'middle_name' => 'required',
            'last_name' => 'required',
            'mobile' => 'required ',
            'email' => 'required ',
        ]);
        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->messages(), 'code' => 422], 422);
        }

        try {
            DB::beginTransaction();

            $NewEployeeId = null;
            $EmployeeId = EmployeeCount::first();
            if($EmployeeId==null){
                $NewEployeeId = config('global.employee_code')."000"."1";
            }else{
                $NewEployeeId = config('global.employee_code')."000".$EmployeeId->count+1;
                
            }
            $user = new User();
            $user->name = $request->first_name;
            $user->email = $request->email;
            $user->password = Hash::make('password');
            $user->role_id = Role::where('slug','teacher')->first()->id;
            $user->save();


            $Student = new Teacher();
            $Student->first_name =  $request->first_name;
            $Student->middle_name = $request->middle_name;
            $Student->last_name = $request->last_name;
            $Student->mobile_no = $request->mobile;
            $Student->employee_id  =$NewEployeeId;
            $Student->user_id  =$user->id;
            $Student->save();

            $userrole = new UserRole();
            $userrole->user_id = $user->id;
            $userrole->role_id = $user->role_id;
            $userrole->save();

            if($EmployeeId==null){
                $EmployeeId = new EmployeeCount();
                $EmployeeId->count =1;
            }else{
                $EmployeeId->count =$EmployeeId->count+1;
            }
            $EmployeeId->save();
            DB::commit();
            return response(['data' => ' Teacher create successfully!', 'status' => 'success'], 200);
        } catch (\Exception $e) {
            dd($e);
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
    public function getEmployeeId(){
        $NewStudentId = null;
        $studentId = EmployeeCount::first();
        if($studentId==null){
            
            $NewStudentId = config('global.employee_code')."000"."1";
        }else{
            $NewStudentId = config('global.employee_code')."000".$studentId->count+1;
            
        }
        return response(['data' => $NewStudentId, 'status' => 'success'], 200);
    }
    public function getTeachers(){

        $Teacher = Teacher::select(DB::raw("CONCAT(first_name, ' ', middle_name, ' ', last_name) as label"),'user_id as value')->get();
        return response(['data' => $Teacher, 'status' => 'success'], 200);

    }
    public function SubjctClassData($id){
        $SubjectClass = ClassSubject::leftjoin('class_section_masters as child','child.id','class_subjects.class_id')
        ->leftJoin('class_section_masters as parent', 'parent.id', '=', 'child.parent_id')
        ->leftjoin('subjects','subjects.id','class_subjects.subject_id')
        ->select(
            DB::raw("IF(child.parent_id != 0, CONCAT(child.name, '(', parent.name, ')'), child.name) as class_name"),
            'subjects.name as subject_name'
        )->where('class_subjects.subject_teacher_id',$id)->get();

        $class_teacher = ClassSubject::leftjoin('class_section_masters as child','child.id','class_subjects.class_id')
        ->leftJoin('class_section_masters as parent', 'parent.id', '=', 'child.parent_id')
        ->select( DB::raw("IF(child.parent_id != 0, CONCAT(child.name, '(', parent.name, ')'), child.name) as class_name"),
        )->where('child.class_teacher',$id)->first();
        return response(['class_teacher' => $class_teacher, 'SubjectClass'=>$SubjectClass, 'status' => 'success'], 200);

    }
   
    
}
