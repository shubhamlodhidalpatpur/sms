<?php
$domain = isset($_SERVER['SERVER_NAME'])? $_SERVER['SERVER_NAME'] : '';
$path=str_replace('.','_', $domain);
return [
    'APP_URL'=>trim(env('APP_URL') ?? ''),
    'FileViewPath'=> trim(env('APP_URL') ?? '').'/sms_uploads/Files/',
    'FileUploadPath'=> trim(base_path() ?? '').'/../sms_uploads/Files/',
    'school_student_code'=>'STD',
    'employee_code'=>'EMP',
    'samgraId'=> trim(base_path()).'/../'.env('UPLOAD_FOLDER').'/samgraId/',
    'samgraIdPath'=> trim(env('APP_URL') ?? '').'/'.env('UPLOAD_FOLDER').'/samgraId/',
    'AadharCard'=> trim(base_path()).'/../'.env('UPLOAD_FOLDER').'/AadharCard/',
    'AadharCardPath'=> trim(env('APP_URL') ?? '').'/'.env('UPLOAD_FOLDER').'/AadharCard/',
    'Tc'=> trim(base_path()).'/../'.env('UPLOAD_FOLDER').'/Tc/',
    'TcPath'=> trim(env('APP_URL') ?? '').'/'.env('UPLOAD_FOLDER').'/Tc/',
    'Migration'=> trim(base_path()).'/../'.env('UPLOAD_FOLDER').'/Migration/',
    'MigrationPath'=> trim(env('APP_URL') ?? '').'/'.env('UPLOAD_FOLDER').'/Migration/',
    
 

];
