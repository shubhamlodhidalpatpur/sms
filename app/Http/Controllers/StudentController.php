<?php

namespace App\Http\Controllers;

use App\Models\Document;
use App\Models\Role;
use App\Models\Student;
use App\Models\StudentIdCount;
use App\Models\Subject;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Helper;
class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $Student = Student::leftjoin('class_section_masters as class','class.id','students.class_id')
        ->leftjoin('class_section_masters as section','section.id','students.section_id')
        ->where(function ($query) use ($request) {
            if (!empty($request->name)) {
                $query->where('students.irst_name', 'like', '%' . $request->first_name . '%');
            }
        })
            ->select('students.*','class.name as class','section.name as section', DB::raw('count(*) OVER() AS total_row_count')) //phpcs:ignore
            ->forPage($request->page, $request->perPage)->get();

        if (count($Student) > 0) {
            return response(['data' => $Student, 'status' => 'success'], 200);
        } else {
            return response(['status' => 'success', 'data' => $Student, 'message' => 'no data found', 'code' => 200], 200);
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
            'class' => 'required ',
            'section' => 'required ',
        ]);
        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->messages(), 'code' => 422], 422);
        }

        try {
            DB::beginTransaction();

            $NewStudentId = null;
            $studentId = StudentIdCount::first();
            if($studentId==null){
                $NewStudentId = config('global.school_student_code')."000"."1";
            }else{
                $NewStudentId = config('global.school_student_code')."000".$studentId->count+1;
                
            }
            $user = new User();
            $user->name = $request->first_name;
            $user->email = $request->email;
            $user->password = Hash::make('password');
            $user->role_id = Role::where('slug','student')->first()->id;
            $user->save();


            $Student = new Student();
            $Student->first_name =  $request->first_name;
            $Student->middle_name = $request->middle_name;
            $Student->last_name = $request->last_name;
            $Student->parent_number = $request->mobile;
            $Student->class_id = $request->class;
            $Student->section_id  = $request->section;
            $Student->roll_number  =$NewStudentId;
            $Student->user_id  =$user->id;
            $Student->remark  = $request->remark;
            $Student->save();

            if($studentId==null){
                $studentId = new StudentIdCount();
                $studentId->count =1;
            }else{
                $studentId->count =$studentId->count+1;
            }
            $studentId->save();
            DB::commit();
            return response(['data' => ' Student create successfully!', 'status' => 'success'], 200);
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
    public function profile($id){
        $profile_table = $this->profileTableName($id);
        $user = User::find($id);
        $profile_columns = ($profile_table)?$profile_table.'.*':'';
        $ProfileData=User::leftJoin('roles', 'roles.id', 'users.role_id')
        ->when($user->role->slug != 'admin', function ($q) use ($id, $profile_table) {
            $q->leftJoin($profile_table, function ($join) use ($id, $profile_table) {
                    $join
                    ->on($profile_table.'.user_id', '=', 'users.id');
            });
        })
        ->where('users.id', $id)
        ->select(
            $profile_columns,
            'users.*',
        )->first();
        $image = ['samgra_id_doc'=>'','aadhar_doc'=>'','tc_card'=>'','migration_doc'=>'']; //phpcs:ignore
        if (!is_null($ProfileData->samgra_id_doc)) {
            $image['samgra_id_doc'] = !empty($ProfileData->samgra_id_doc) ? config('global.samgraIdPath') . $ProfileData->id . "/files/" . $ProfileData->samgra_id_doc : '';//phpcs:ignore
            $documemnt = Document::where('user_id', $ProfileData->id)->where('document_name', 'samgra_id_doc')->first();//phpcs:ignore
            $image['samgra_id_doc_fileName'] =$documemnt?$documemnt->document_orignal_name:'';//phpcs:ignore
            $image['samgra_id_doc_uploadTime'] = $documemnt?$documemnt->document_upload_time:'';//phpcs:ignore
        }
        if (!is_null($ProfileData->aadhar_doc)) {
            $image['aadhar_doc'] = !empty($ProfileData->aadhar_doc) ? config('global.AadharCardPath') . $ProfileData->id . "/files/" . $ProfileData->aadhar_doc : '';//phpcs:ignore
            $documemnt = Document::where('user_id', $ProfileData->id)->where('document_name', 'aadhar_doc')->first();//phpcs:ignore
            $image['aadhar_doc_fileName'] =$documemnt?$documemnt->document_orignal_name:'';//phpcs:ignore
            $image['aadhar_doc_uploadTime'] = $documemnt?$documemnt->document_upload_time:'';//phpcs:ignore
        }
        if (!is_null($ProfileData->migration_doc)) {
            $image['migration_doc'] = !empty($ProfileData->migration_doc) ? config('global.MigrationPath') . $ProfileData->id . "/files/" . $ProfileData->migration_doc : '';//phpcs:ignore
            $documemnt = Document::where('user_id', $ProfileData->id)->where('document_name', 'migration_doc')->first();//phpcs:ignore
            $image['migration_doc_fileName'] =$documemnt?$documemnt->document_orignal_name:'';//phpcs:ignore
            $image['migration_doc_uploadTime'] = $documemnt?$documemnt->document_upload_time:'';//phpcs:ignore
        }
        if (!is_null($ProfileData->tc_doc)) {
            $image['tc_doc'] = !empty($ProfileData->migration_doc) ? config('global.TcPath') . $ProfileData->id . "/files/" . $ProfileData->tc_doc : '';//phpcs:ignore
            $documemnt = Document::where('user_id', $ProfileData->id)->where('document_name', 'tc_doc')->first();//phpcs:ignore
            $image['tc_doc_fileName'] =$documemnt?$documemnt->document_orignal_name:'';//phpcs:ignore
            $image['tc_doc_uploadTime'] = $documemnt?$documemnt->document_upload_time:'';//phpcs:ignore
        }

        return response(['status' => 'success', 'data' => $ProfileData, 'image' => $image,'message' => 'no data found', 'code' => 200], 200);


    }
    public function updateProfile(Request $request){
        $user = User::find($request->id);
        $validationRules = [
            'first_name' => 'required|not_regex:/[@#$%!^*<>?]/',
            
        ];
        $validationErrorResponse = [
            'first_name.required' => 'The First Name is Required',

        ];
        $validator = Validator::make($request->all(), $validationRules, $validationErrorResponse);
            if ($validator->fails()) {
                return response([
                    'status' => false, 'errors' => $validator->errors()->messages(), 'code' => 422,
                    'message' => implode(', ', $validator->errors()->all())
                ], 422);
            }
        $user = User::find($request->id);
        $user->name = $request->first_name;
        $user->email = $request->email;
        $user->save();
        if ($user->role->slug == 'student') {
            $this->updateStudentData($request, $user);
        }   
        return response([
            'status' => true, 'message' => "Profile Updated Successfully!",
            'responseData' => ['role' => $user->role->slug]
            ], 200);
    }


    public function profileTableName($user_id)
    {
        $user = User::find($user_id);
        $output = '';
        //Update user Profile Wise data
        if ($user->role->slug == 'student') {
            $output = 'students';
        } elseif ($user->role->slug == 'teacher') {
            $output = 'teachers';
        }
        return $output;
    }
    public function updateStudentData($request,$user){
        $Student = Student::where('user_id',$user->id)->first();
        $Student->first_name =  $request->first_name;
        $Student->middle_name = $request->middle_name;
        $Student->last_name = $request->last_name;
        $Student->father_name =$request->father_name;
        $Student->mother_name =$request->mother_name;
        $Student->dob =$request->dob;
        $Student->gender =$request->gender;
        $Student->aadhar_number =$request->aadhar_number;
        $Student->samgra_id =$request->samgra_id;
        $Student->class_id =$request->class_id;
        $Student->section_id =$request->section_id;
        $Student->prsnol_number =$request->prsnol_number;
        $Student->parent_number = $request->parent_number;
        $Student->class_id = $request->class;
        $Student->section_id  = $request->section;
        $Student->address =$request->address;
        $Student->subject =$request->subject;
        if ($request->samgra_id_doc != null && $request->hasFile('samgra_id_doc')) {
            $Student->samgra_id_doc = Helper::documentUpload($request->samgra_id_doc, $user->id, 'samgraId'); //phpcs:ignore
            DB::table('documents')->insert(
                [
                    [
                        'user_id' => $user->id,
                        'role_id' => $user->role_id,
                        'document_name' => 'samgra_id_doc',
                        'file_name' => $Student->samgra_id_doc,  
                        'document_orignal_name' => $request->samgra_id_doc_fileName,
                        'document_upload_time' => now(),
                        
                    ],
                ]
            );
        } elseif ($request->samgra_id_doc == null && $Student->samgra_id_doc != null) {
            DB::table('document_types')
            ->where('user_id', $user->id)
            ->where('role_id', $user->role_id)
            ->where('document_name', 'samgra_id_doc')->delete();
            Helper::documentDelete($Student->samgra_id_doc, $user->id, 'samgraId');//phpcs:ignore
            $Student->samgra_id_doc=null;
        }
        if ($request->aadhar_doc != null && $request->hasFile('aadhar_doc')) {
            $Student->aadhar_doc = Helper::documentUpload($request->aadhar_doc, $user->id, 'AadharCard'); //phpcs:ignore
            DB::table('documents')->insert(
                [
                    [
                        'user_id' => $user->id,
                        'role_id' => $user->role_id,
                        'document_name' => 'aadhar_doc',
                        'file_name' => $Student->aadhar_doc,  
                        'document_orignal_name' => $request->aadhar_doc_fileName,
                        'document_upload_time' => now(),
                        
                    ],
                ]
            );
        } elseif ($request->aadhar_doc == null && $Student->aadhar_doc != null) {
            DB::table('document_types')
            ->where('user_id', $user->id)
            ->where('role_id', $user->role_id)
            ->where('document_name', 'aadhar_doc')->delete();
            Helper::documentDelete($Student->aadhar_doc, $user->id, 'AadharCard');//phpcs:ignore
            $Student->aadhar_doc=null;
        }
        if ($request->tc_doc != null && $request->hasFile('tc_doc')) {
            $Student->tc_doc = Helper::documentUpload($request->tc_doc, $user->id, 'Tc'); //phpcs:ignore
            DB::table('documents')->insert(
                [
                    [
                        'user_id' => $user->id,
                        'role_id' => $user->role_id,
                        'document_name' => 'tc_doc',
                        'file_name' => $Student->tc_doc,  
                        'document_orignal_name' => $request->tc_doc_fileName,
                        'document_upload_time' => now(),
                        
                    ],
                ]
            );
        } elseif ($request->tc_doc == null && $Student->tc_doc != null) {
            DB::table('document_types')
            ->where('user_id', $user->id)
            ->where('role_id', $user->role_id)
            ->where('document_name', 'tc_doc')->delete();
            Helper::documentDelete($Student->tc_doc, $user->id, 'Tc');//phpcs:ignore
            $Student->tc_doc=null;
        }
        if ($request->migration_doc != null && $request->hasFile('migration_doc')) {
            $Student->migration_doc = Helper::documentUpload($request->migration_doc, $user->id, 'Migration'); //phpcs:ignore
            DB::table('documents')->insert(
                [
                    [
                        'user_id' => $user->id,
                        'role_id' => $user->role_id,
                        'document_name' => 'migration_doc',
                        'file_name' => $Student->migration_doc,  
                        'document_orignal_name' => $request->migration_doc_fileName,
                        'document_upload_time' => now(),
                        
                    ],
                ]
            );
        } elseif ($request->migration_doc == null && $Student->migration_doc != null) {
            DB::table('document_types')
            ->where('user_id', $user->id)
            ->where('role_id', $user->role_id)
            ->where('document_name', 'migration_doc')->delete();
            Helper::documentDelete($Student->tc_doc, $user->id, 'Migration');//phpcs:ignore
            $Student->migration_doc=null;
        }
        $Student->save();
        
    }
}
