<?php

use Illuminate\Http\Request;
use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BranchController;
use App\Http\Controllers\BUController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\TeamController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\AttendanceController;
use App\Http\Controllers\ClassSectionMasterController;
use App\Http\Controllers\UserController;


use App\Http\Controllers\HolidayController;
use App\Http\Controllers\LeaveTypeController;
use App\Http\Controllers\OrganizationController;
use App\Http\Controllers\SubjectController;
use App\Http\Controllers\SwapRequestController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
    
});
Route::resource('/branches', BranchController::class);
Route::get('/BU', [BUController::class, 'index']);
Route::post('/addBU', [BUController::class, 'store']);
Route::get('/fetchBU', [BUController::class, 'index']);
Route::get('/BU/edit/{id}', [BUController::class, 'edit']);
Route::post('/BU/update/{id}', [BUController::class, 'update']);
Route::delete('/BU/{id}', [BUController::class, 'destroy']);


Route::post('/addbranch', [BranchController::class, 'store']);
Route::get('/fetchbranch', [BranchController::class, 'index']);
Route::get('/branchedit/{id}', [BranchController::class, 'edit']);
Route::post('/branchUpdate/{id}', [BranchController::class, 'update']);
Route::delete('/branch/{id}', [BranchController::class, 'destroy']);
Route::get('/fetchbranchData/{id}', [BranchController::class,'fetchTeamData']);
Route::get('/getBUData', [BranchController::class, 'getBUData']);


Route::post('/adddepartment', [DepartmentController::class, 'store']);
Route::get('/fetchdepartment', [DepartmentController::class, 'index']);
Route::get('/departmentedit/{id}', [DepartmentController::class, 'edit']);
Route::post('/departmentUpdate/{id}', [DepartmentController::class, 'update']);
Route::delete('/department/{id}', [DepartmentController::class, 'destroy']);
Route::get('/fetchdepartmentData/{id}', [DepartmentController::class,'fetchTeamData']);
Route::get('/getBranch', [DepartmentController::class, 'getBranch']);

Route::post('/addteam', [TeamController::class, 'store']);
Route::get('/fetchteam', [TeamController::class, 'index']);
Route::get('/teamedit/{id}', [TeamController::class, 'edit']);
Route::post('/teamUpdate/{id}', [TeamController::class, 'update']);
Route::delete('/team/{id}', [TeamController::class, 'destroy']);
Route::get('/fetchteamData/{id}', [TeamController::class,'fetchTeamData']);
Route::get('/getDepartment', [TeamController::class, 'getDepartment']);

Route::get('/teamoption/{id}', [RoleController::class, 'teamoption']);
Route::get('/fetchRole', [RoleController::class, 'index']);
Route::post('/roleadd', [RoleController::class, 'store']);
Route::get('/roleEdit/{id}', [RoleController::class, 'edit']);
Route::post('/RoleUpdate/{id}', [RoleController::class, 'update']);
Route::delete('/role/{id}', [RoleController::class, 'destroy']);
Route::get('/SuparAdmin', [RoleController::class, 'suparAdmin']);
Route::get('/getRoleFromdepartmentId/{id}', [RoleController::class, 'getRoleFromdepartmentId']);

Route::post('/login', [LoginController::class, 'store']);  
Route::resource('Attendances', AttendanceController::class);
Route::post('/CheckinAttendance', [AttendanceController::class, 'checkinAttendance']);
Route::post('/CheckOutAttendance', [AttendanceController::class, 'checkOutAttendance']);
Route::get('/CHeckTodayAttendance', [AttendanceController::class, 'checkTodayAttendance']);
Route::get('/CheckAttendances', [AttendanceController::class, 'CheckAttendances']);
Route::post('changeStatus/{status}/{id}', [AttendanceController::class,'changeStatus']);
Route::get('getFieldsByRole/{role_id?}', [RoleController::class,'getFieldsByRole']);
Route::get('getFieldTypes', [RoleController::class, 'getFieldTypes']);
Route::post('submitUserForm', [UserController::class, 'submitUserForm']);
Route::resource('users', UserController::class);
Route::resource('swapRequest', SwapRequestController::class);
Route::get('/CheckswapRequest', [SwapRequestController::class, 'CheckswapRequest']);
Route::post('changeSwapRequestStatus/{status}/{id}', [SwapRequestController::class,'changeSwapRequestStatus']);
Route::resource('holidays', HolidayController::class);
Route::resource('LeaveTypes',LeaveTypeController::class);

Route::post('submitRegistrationForm', [OrganizationController::class ,'submitRegistrationForm']);
Route::get('country', [OrganizationController::class, 'getCountry']);
Route::get('/getStateFromCountryId/{id}', [OrganizationController::class, 'getStateFromCountryId']);
Route::get('/getCityFromStateId/{id}', [OrganizationController::class, 'getCityFromStateId']);
Route::get('industryType', [OrganizationController::class, 'industryType']);

Route::resource('ClassSections',ClassSectionMasterController::class);
Route::post('ClassStore', [ClassSectionMasterController::class ,'ClassStore']);
Route::post('SectionStore', [ClassSectionMasterController::class ,'SectionStore']);
Route::get('getClass', [ClassSectionMasterController::class, 'getClass']);
Route::get('class/{id}/edit', [ClassSectionMasterController::class, 'classEdit']);
Route::post('ClassUpdate/{id}', [ClassSectionMasterController::class ,'ClassUpdate']);
Route::post('SectionUpdate/{id}', [ClassSectionMasterController::class ,'SectionUpdate']);
Route::get('deleteClassSection/{id}', [ClassSectionMasterController::class, 'destroy']);
Route::post('AssignSubject', [ClassSectionMasterController::class ,'AssignSubject']);
Route::get('AssignSubjectListing', [ClassSectionMasterController::class, 'AssignSubjectListing']);
Route::get('getSubjects/{id}', [ClassSectionMasterController::class, 'getSubjects']);
Route::get('getSubjectsWithTeacher/{id}', [ClassSectionMasterController::class, 'getSubjectsWithTeacher']);
Route::get('getClassSection', [ClassSectionMasterController::class, 'getClassSection']);
Route::get('getSubject', [SubjectController::class, 'getSubject']);
Route::resource('Subject',SubjectController::class);
Route::post('AssignTeacher', [ClassSectionMasterController::class ,'AssignTeacher']);
Route::get('getClassTeacher/{id}', [ClassSectionMasterController::class, 'getClassTeacher']);

