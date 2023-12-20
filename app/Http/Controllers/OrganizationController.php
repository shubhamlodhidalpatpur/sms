<?php

namespace App\Http\Controllers;
use App\Models\Country;
use App\Models\State;
use App\Models\City;
use App\Models\Organization;
use App\Models\OrganizationEntity;
use App\Models\OrgStructure;
use App\Models\WorkingDay;
use App\Models\Quarter;
use App\Models\Swift;
use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use DB;

class OrganizationController extends Controller
{
    //
    public function getCountry()
    {
       
        $Country = Country::all();
        if (empty($Country) || count($Country) == 0) {
            return response(['message' => 'no data found in database', 'status' => 'failure'], 404);
        } else {
            return response(['data' => $Country, 'status' => 'success'], 200);
        }
        
    }
    public function getStateFromCountryId($id)
    {
        $State = State::where('country_id', $id)->get();
        if (empty($State) || count($State) == 0) {
            return response(['data' => [['label' => 'no State found for this country', 'id' => '']], 'message' => 'no data found in database', 'status' => 'failure'], 200);//phpcs:ignore
        } else {
            return response(['data' => $State, 'status' => 'success'], 200);
        }
    }

    public function getCityFromStateId($id)
    {
        $City = City::where('state_id', $id)->get();
        if (empty($City) || count($City) == 0) {
            return response(['data' => [['label' => 'no city found for this state', 'id' => '']], 'message' => 'no data found in database', 'status' => 'failure'], 200);//phpcs:ignore
        } else {
            return response(['data' => $City, 'status' => 'success'], 200);
        }
    }
    public function industryType()
    {
        $data=[];
        $data['weekday']= DB::table('working_days')->select('title as text', 'id as value')->get();
        $data['industry'] = DB::table('industry_types')->get();
        return response(['data' =>$data, 'status' => 'success'], 200);
    }
    public function submitRegistrationForm(Request $request)
    {
      
        DB::beginTransaction();

        try {
            $error=[];
            if ($request->formType == 'overview') {
                $validator = Validator::make($request->all(), [
                    'company_name'=> ['required', 'regex:/^([a-zA-Z]+)(\s[a-zA-Z]+)*$/'],
                    'phone' => 'required|integer|digits:10',
                    'email'=>'required | email | unique:users',
                    'street' => 'required|string',
                    'country' => 'required',
                    'city' => 'required',
                    'state' => 'required',
                    'pincode' => 'required|integer|digits:6',
                    'employee_strength' => 'required|integer|gt:0|digits_between:1,7',
                    'industry_type' => 'required',
                ]);
        
                if ($validator->fails()) {
                    return response(['errors' => $validator->errors()->messages(), 'code' => 422], 422);
                }
                $Organization = new Organization();
                $Organization->organization_name=$request->company_name;
                $Organization->phone=$request->phone;
                $Organization->email=$request->email;
                $Organization->street=$request->street;
                $Organization->city_id=$request->city;
                $Organization->state_id=$request->state;
                $Organization->country_id=$request->country;
                $Organization->employee_strength=$request->employee_strength;
                $Organization->industry_type_id=$request->industry_type;
                $Organization->created_by=0;
                $Organization->save();
                

                $OrganizationEntity = new OrganizationEntity();
                $OrganizationEntity->name = $request->company_name;
                $OrganizationEntity->org_entity_type_id = OrgStructure::where('slug', 'organization')->first()->id;
                // $OrganizationEntity->master_table_data_id = $Organization->id;
                $OrganizationEntity->parent_id = 0;
                $OrganizationEntity->reporting_head = 0;
                $OrganizationEntity->status = 'A';
                $OrganizationEntity->save();

              
            } elseif ($request->formType == 'systemForm') {
                if ($request->working_day) {
                    foreach ($request->working_day as $item) {
                        $workingday = WorkingDay::find($item);
                        $workingday->working='1';
                        $workingday->save();
                    }
                }
                if ($request->shift) {
                    foreach ($request->shift as $item) {
                        $swift = new Swift();
                        $swift->title=$item['title'];
                        $swift->from_date=$item['from'];
                        $swift->to_date=$item['to'];
                        $swift->save();
                    }
                }
                foreach ($request->QuarterTableData as $item) {
                    $Quarter = new Quarter();
                    $Quarter->title=$item['title'];
                    $Quarter->from_date=$item['from_date'];
                    $Quarter->to_date=$item['to_date'];
                    $Quarter->save();
                }
            } elseif ($request->formType == 'BUForm') {
                $Bu = OrganizationEntity::leftjoin(
                    'org_structures',
                    'org_structures.id',
                    'org_entities.org_entity_type_id'
                )->where('org_structures.slug', 'bu')->first();
                if ($Bu==null) {
                    $error = array_merge($error, ['BlankBU' => ['At Least One BU Must Be Added '] ]);
                }
                if ($error != []) {
                    return response(['errors' => $error, 'code' => 422], 422);
                }
            }
            elseif ($request->formType == 'BranchForm') {
                $branch = OrganizationEntity::leftjoin(
                    'org_structures',
                    'org_structures.id',
                    'org_entities.org_entity_type_id'
                )->where('org_structures.slug', 'branch')->first();
                if ($branch==null) {
                    $error = array_merge($error, ['BlankBranch' => ['At Least One Branch Must Be Added '] ]);
                }
                if ($error != []) {
                    return response(['errors' => $error, 'code' => 422], 422);
                }
            }
             elseif ($request->formType == 'departmentForm') {
                $department = OrganizationEntity::leftjoin(
                    'org_structures',
                    'org_structures.id',
                    'org_entities.org_entity_type_id'
                )->where('org_structures.slug', 'department')->first();
                if ($department==null) {
                    $error = array_merge($error, ['BlankDepartment' => ['At Least One Department Must Be Added '] ]);
                }
                if ($error != []) {
                    return response(['errors' => $error, 'code' => 422], 422);
                }
            } elseif ($request->formType == 'teams') {
                $Team = OrganizationEntity::leftjoin(
                    'org_structures',
                    'org_structures.id',
                    'org_entities.org_entity_type_id'
                )
                ->where('org_structures.slug', 'team')->first();
                if ($Team==null) {
                    $error = array_merge($error, ['BlankTeam' => ['At Least One Team Must Be Added '] ]);
                }
                if ($error != []) {
                    return response(['errors' => $error, 'code' => 422], 422);
                }
            } elseif ($request->formType == 'roles') {
                $Role = Role::where('slug', '!=', 'super-admin')->first();
                if ($Role==null) {
                    $error = array_merge($error, ['BlankRole' => ['At Least One Role Must Be Added '] ]);
                }
                if ($error != []) {
                    return response(['errors' => $error, 'code' => 422], 422);
                }
                  
                    // Storage::disk('env')->append(str_replace('.','_',request()->getHost())
                    //  . '.env', 'SETUP_COMPLETED=true');
                // }

                // $organization = Organization::select('organizations.*')->first();
                // $mailer = new SendMailController();
                // $mailer->sendSetupCompleteMail($organization);

                // $env = file_get_contents(base_path("env/".str_replace('.','_',request()->getHost()) . '.env'));
                // $env = str_replace("SETUP_COMPLETED=SETUP_COMPLETED",'SETUP_COMPLETED=true', $env);
                // $env = str_replace("SETUP_COMPLETED=",'SETUP_COMPLETED=true', $env);
                // $resp = File::put(base_path("env/".str_replace('.','_',request()->getHost()) . '.env'), $env);
            }
        } catch (\Exception $e) {
            dd($e);
        }

        DB::commit();


        return response(['status'=>'success'], 200);
    }
}
