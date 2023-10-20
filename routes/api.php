<?php

use Illuminate\Http\Request;
use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BranchController;
use App\Http\Controllers\BUController;


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


Route::post('/login', [LoginController::class, 'store']);
