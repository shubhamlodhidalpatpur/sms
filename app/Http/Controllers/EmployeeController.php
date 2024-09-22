<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use App\Models\OrganizationEntity;
use App\Models\OrgStructure;
use App\Models\User;
use App\Models\UserRole;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Hash;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
    $employees = DB::table('employees')
    ->leftJoin('departments', 'employees.department_id', 'departments.id')
    ->leftJoin('roles', 'roles.id', 'employees.role_id')
    ->leftJoin('users as usr', 'usr.id', 'employees.user_id')
    ->leftJoin('users as reporting_to', 'reporting_to.id', 'employees.reporting_to')

    ->where(function ($query) use ($request) {
        if (!empty($request->name)) {
            $query->where('employees.employee_name', 'like', '%' . $request->name . '%');
        }
        if (!empty($request->department)) {
            $query->where('employees.department_id', 'like', '%' . $request->department . '%');
        }
        if (!empty($request->email)) {
            $query->where('employees.email', 'like', '%' . $request->email . '%');
        }
        if (!empty($request->team_id)) {
            $query->where('employees.team_id', 'like', '%' . $request->team_id . '%');
        }
    })
    ->select(
        'employees.*',
        'usr.email as email',
        'reporting_to.name as reporting_head',
        'departments.title as department',
        DB::raw('CONCAT(employees.first_name, " ", employees.middle_name, " ",employees.last_name) as employee_name'),
        'roles.name as role',
        DB::raw('count(*) OVER() AS total_row_count')
    )->orderBy($request->sortBy ?? 'departments.id', $request->sortDesc == 'true' ? 'DESC' : 'ASC')
    ->forPage($request->page, $request->perPage);
    $employees = $employees->orderBy('id', 'desc')->get();
    if (count($employees) > 0) {
        return response(['data' => $employees, 'status' => 'success'], 200);
    } else {
        return response(['status' =>'success','data' =>$employees,'message'=>'no data found', 'code' => 200], 200);
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
        $validator = Validator::make(
            $request->all(),
            [
            "first_name"=> 'required|regex:/^[\pL\s\-]+$/u' ,
            "middle_name"=> 'required|regex:/^[\pL\s\-]+$/u' ,
            "last_name"=> 'required|regex:/^[\pL\s\-]+$/u' ,
            "mobile"=>'required|numeric|digits:10',
            "department_id"=>"required",
            "team_id"=> "required",//phpcs:ignore
            "gender"=>'required ',
            "role"=> 'required ',
            'reporting_role'=> "required",
            // "reporting_to"=>"required",
            "email"=> 'required|unique:users|email',
            "dob"=> 'required ',
            ],
            [
            'mobile.digits' => 'Invalid Contact Number',
            'mobile.required' => 'The contact field is required',
            'department_id.required' => 'The department field is required',
            'team_id.required' => 'The team field is required',
            'reporting_role.required' => 'The Reporting To Role field is required',
            ]
        );
        
        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->messages(), 'code' => 422], 422);
        }
        DB::beginTransaction();

        try {
            $user=new User;
            $user->name = $request->first_name.' '.$request->middle_name.' '.$request->last_name;
            $user->email=$request->email;
            $user->role_id=$request->role;
            $user->password=Hash::make('password');
            $user->save();

            $employee = new Employee();
            $employee->first_name =  $request->first_name;
            $employee->middle_name = $request->middle_name;
            $employee->last_name = $request->last_name;
            $employee->user_id = $user->id;
            $employee->dob=$request->dob;
            $employee->department_id=$request->department_id;
            $employee->gender=$request->gender;
            $employee->reporting_role_id =$request->reporting_role;
            $employee->role_id =$request->role;
            $employee->mobile =$request->mobile;
            $employee->reporting_to =1;
            $employee->created_by = (Auth::user())?Auth::user()->id:1;
            $employee->save();
            $userrole = new UserRole();
            $userrole->user_id = $user->id;
            $userrole->role_id = $employee->role_id;
            $userrole->save();
        } catch (\Exception $e) {
            dd($e);
            report($e);
            DB::rollback();
            return response(['data'=>'Something Went Wrong','status'=>'failure'], 500);
        }

        DB::commit();
        return response(['data'=>'Employee Added Successfully!','status'=>'success'], 200);
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
}
