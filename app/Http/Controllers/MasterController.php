<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Http\Request;
use App\Models\FieldType;
use App\Models\Master;
use App\Models\MasterField;

class MasterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $master=Master::get();
        return response($master, 200);

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
        $tableName = $request->input('name');
        $fields = $request->input('masterFields');
        if (!Schema::hasTable($tableName)) {
            Schema::create($tableName, function (Blueprint $table) use ($fields) {
                $table->id();

                foreach ($fields as $field) {
                    $columnName = str_replace(' ', '_', $field['title']);
                    $columnType = FieldType::where('id',$field['field_type_id'])->first()->slug;
                    $table->$columnType($columnName)->nullable(true);
                }

                $table->timestamps();
            });
        }
        $FieldData = [];
        $master = new Master();
        $master->title=$request->name;
        $master->save();
        foreach($request->masterFields as $field){
            if($field['master_id'] == '0'){
                $field['master_id'] = $master->id;
                $FieldData[] = [
                    'title' => $field['title'],
                    'slug' => str_replace(' ', '_', $field['title']),
                    'field_type_id' => $field['field_type_id'],
                    'validation_rule' => $field['validation_rule'],
                    'master_id' => $master->id,
                    'created_at' => now(),
                    'field_value' => isset($field['field_value'])? $field['field_value'] : null,
                    'required' => $field['required'],
                    'show_list' => $field['show_list'],
                    'show_filter' => $field['show_filter'],
                    'is_default_field' => $field['is_default_field'],
                ];
            }
            else{
                try{
                $validation = [];
                $ft = FieldType::find($field['field_type_id']);
                // dd($ft);    
                if(isset($field['required']) && $field['required'] == 1){
                    $validation[] = "required";
                }
                if($ft->slug == 'string'){
                    $validation[] = "string";
                }
                if($ft->slug == 'number'){
                    $validation[] = "number";
                }
                if($ft->slug == 'float'){
                    $validation[] = "float";
                }
                if($ft->slug == 'date'){
                    $validation[] = "date";
                }
                if($ft->slug == 'file'){
                    $validation[] = "file";
                }
                $FieldData[] = [
                    'title' => $field['title'], 
                    'slug' => str_replace(' ', '_', $field['title']),
                    'field_type_id' => $field['field_type_id'],
                    'validation_rule' => implode('|', $validation),
                    'master_id' => $master->id,
                    'created_at' => now(),
                    'field_value' => isset($field['field_value'])? $field['field_value'] : null,
                    'show_list' => $field['show_list'],
                    'show_filter' => $field['show_filter'],
                    'required' => $field['required'],
                    'is_default_field' => 0,
                ];
            }
            catch(\Exception $e){
                dd($e,$field, $ft, implode('|', $validation));
            }
                

            }
        }
        MasterField::insert($FieldData);

        return response()->json(['message' => 'Table created successfully'], 200);

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
        $role=Master::where('masters.id', $id)
        ->select('masters.*') ->first();
        $role->masterFields = $this->getFieldsByMasterId($id);
        return response(['data' => $role, 'status' => 'success'], 200);
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
    public function getFieldsByMasterId($master_id = 0)
    {
        $trace = debug_backtrace(DEBUG_BACKTRACE_IGNORE_ARGS);
        $fields = MasterField::where('master_id', $master_id)
            ->leftJoin('field_types','field_types.id','master_fields.field_type_id')
            // ->orWhere('role_id', 0)
            ->select(
                'master_fields.*',
                'field_types.title as field_type',
                'field_types.slug as field_type_slug',
            )
            ->get();
        if(isset($trace[1]['function']) && $trace[1]['function'] == 'callAction'){
            return response(['data' => $fields, 'status' => 'success'], 200);
        }
        else{
            return $fields;
        }
        
    }
}
