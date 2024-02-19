<?php

namespace App\Http\Controllers;

use App\Models\MasterField;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use File;
use Image;
use Str;

class ModuleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request,$modulename)
    {  
        $data=DB::table($modulename)->select('*', DB::raw('count(*) OVER() AS total_row_count'));
        if ($request->has('filter')) {
            foreach ($request->filter as $item) {
                $jsonData = json_decode($item, true);
                $field = $jsonData['field'];
                $value = $jsonData['value'];
    
                if($value!=null){
                    $data->where($field, 'like', '%' . $value . '%');
                }
            }
        }
        $data = $data->forPage($request->page, $request->perPage)->get();
        if (count($data) > 0) {
            return response(['data' => $data, 'status' => 'success'], 200);
        } else {
            return response(['status' => 'success','data'=>$data,'message'=> 'no data found','code' => 200], 200);
        }
        //
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
    public function store(Request $request,$modulename)
    {   
        $error = [];
        $data=$request->all();
        $InsertData=[];
        foreach ($data['fields'] as $d) {
            if($d['required']==1){
                if ($d['value']=='undefined') {
                    $error = array_merge($error, [$d['slug'] => [' The '.$d['title'].' is require']]);
                }
               
            }
            if($d['value']!='undefined'){
                if($d['field_type_slug']=='file'){
                    $InsertData[$d['slug']] =  $this->FileUpload($d['value']);    
                }else{
                    $InsertData[$d['slug']] = $d['value'];
                }
            }
        }
        if ($error != []) {
            return response(['errors' => $error, 'code' => 422], 422);
        }
        DB::table($modulename)->insert($InsertData);
        return response(['status'=>'success', 'message' => $modulename.'Added Successfully']);

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
    public function update(Request $request,$modulename,$id)
    {
        $error = [];
        $data=$request->all();
        $InsertData=[];
        foreach ($data['fields'] as $d) {
            if($d['required']==1){
                if ($d['value']=='undefined') {
                    $error = array_merge($error, [$d['slug'] => [' The '.$d['title'].' is require']]);
                }
               
            }
            if($d['value']!='undefined'){
                if($d['field_type_slug']=='file'){
                    if($d['value']!=null && $d['value']!="null" ){
                        $InsertData[$d['slug']] =  $this->FileUpload($d['value']);    
                    }
                }else{
                    $InsertData[$d['slug']] = $d['value'];
                }   
            }
        }
        if ($error != []) {
            return response(['errors' => $error, 'code' => 422], 422);
        }
        DB::table($modulename)->where('id', $id)->update($InsertData);
        return response(['status'=>'success', 'message' => $modulename.'Updated Successfully']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($modulename,$id)
    {
        DB::table($modulename)->where('id', $id)->delete();
        return response(['status'=>'success', 'message' => $modulename.'Deleted Successfully']);


    }
    public function getFields(Request $request,$modulename){
        $trace = debug_backtrace(DEBUG_BACKTRACE_IGNORE_ARGS);
        $fields = MasterField::leftJoin('masters','masters.id','master_fields.master_id')
            ->leftJoin('field_types','field_types.id','master_fields.field_type_id')
            ->where('masters.title', $modulename)
            ->select(
                'master_fields.*',
                'field_types.title as field_type',
                'field_types.slug as field_type_slug',
            );
            if($request->filter==true || $request->filter=="true"){
                $fields = $fields->where('master_fields.show_filter',1)->get();
            }else{
                $fields =  $fields->get();

            }
        if(isset($trace[1]['function']) && $trace[1]['function'] == 'callAction'){
            return response(['data' => $fields, 'status' => 'success'], 200);
        }
        else{
            return $fields;
        }
    }
    public function getListingFields($modulename){
        $trace = debug_backtrace(DEBUG_BACKTRACE_IGNORE_ARGS);
        $fields = MasterField::leftJoin('masters','masters.id','master_fields.master_id')
            ->leftJoin('field_types','field_types.id','master_fields.field_type_id')
            ->where('masters.title', $modulename)
            ->where('master_fields.show_list',1)
            ->pluck('master_fields.slug')
            ->toArray();
        $fields = array_merge(['sr_no'], $fields);
        $fields[] = 'action';
        if(isset($trace[1]['function']) && $trace[1]['function'] == 'callAction'){
            return response(['data' => $fields, 'status' => 'success'], 200);
        }
        else{
            return $fields;
        }
    }
    public function getFieldsData($modulename,$id){
    $data=DB::table($modulename)->select('*')->where('id',$id)->first();
      $trace = debug_backtrace(DEBUG_BACKTRACE_IGNORE_ARGS);
      $fields = MasterField::leftJoin('masters','masters.id','master_fields.master_id')
          ->leftJoin('field_types','field_types.id','master_fields.field_type_id')
          ->where('masters.title', $modulename)
          ->select(
              'master_fields.*',
              'field_types.title as field_type',
              'field_types.slug as field_type_slug',
          )->get();
          foreach ($fields as &$field) {
            foreach ($data as $key => $value) {
                if ($field->slug === $key) {
                    $field->value = $value;
                    if($field->field_type_slug=="file"){
                        $field->image_link=config('global.FileViewPath').$value;
                        $field->value=null;
                    }
                    break; // If the match is found, exit the loop for efficiency
                }
            }
        }
      if(isset($trace[1]['function']) && $trace[1]['function'] == 'callAction'){
          return response(['data' => $fields, 'status' => 'success'], 200);
      }
      else{
          return $fields;
      }
     
    }
    public function FileUpload($file_name) //phpcs:ignore
    {
        $originalImgStorage = config('global.FileUploadPath');
        if (!File::exists($originalImgStorage)) {
            File::makeDirectory($originalImgStorage, 0755, true);
        }
        if ($file_name->getClientOriginalExtension()=="jpg"||$file_name->getClientOriginalExtension()=="png") {
            $filename = Str::random(20) . '_' .now()->format('YmdHis') . '.'.$file_name->getClientOriginalExtension();
            $originalimgpath = $originalImgStorage . '/' . $filename;
            Image::make(file_get_contents($file_name))->save($originalimgpath);
        } else {
            $filenameWithExt = $file_name->getClientOriginalName();
            $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);
            $extension = $file_name->getClientOriginalExtension();
            $fileNameToStore = $filename . '-' . time() . '.' . $extension;
            $filename = Str::random(20) . '_' . now()->format('YmdHis') . '.'.$extension;
            $path = $file_name->move($originalImgStorage, $filename);
        }
        return $filename;
    }
}
