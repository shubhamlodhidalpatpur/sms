<?php

namespace App\Utility;

use DB;
use Mail;
use Auth;
use File;
use Str;
use Storage;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Response;
use Intervention\Image\Facades\Image;
use Log;
use Symfony\Component\Console\Command\Command;
use DateTime;

class UtilityClass
{
    ///*---------------------------------------------------------------
    /* Utility Facade                                                  |
    /* This Facade is use for all application to make common function  |
    /*  use Helper; Helper::yourfunctionName();                        |                                          |
    /*-----------------------------------------------------------------|
    */
    public function checkBase64Image($base64)
    {
        $base64 = explode("/", $base64);
        if ($base64[0] == "data:image") {
            return true;
        }

        return false;
    }

    public function documentUpload($document, $id, $type, $location = null, $getPath = 0)
    {

        switch ($type) {
            case ('uploadImage'):
                $location = config('global.ProfilePathUpload') . $id . '/profile_upload/original';
                break;
            case ('samgraId'):
                $location = config('global.samgraId') . $id . '/files';
                break;
            case ('AadharCard'):
                $location = config('global.AadharCard') . $id . '/files';
                break;  
            case ('Tc'):
                $location = config('global.Tc') . $id . '/files';
                break;  
            case ('Migration'):
                $location = config('global.Migration') . $id . '/files';
                break;                
                
        }
        if ($getPath) {
            return $location;
        }
        if (!File::exists($location)) {
            File::makeDirectory($location, 0755, true);
        }
        $docFile = explode(',', $document);

        if (isset($docFile[1]) && base64_encode(base64_decode($docFile[1], true)) === $docFile[1]) {
            $decodedContent = base64_decode($docFile[1]);
            $finfo = new \finfo(FILEINFO_MIME_TYPE);
            $mimeType = $finfo->buffer($decodedContent);
            $mimeToExtension = [
                'image/jpeg' => 'jpg',
                'image/png' => 'png',
                'application/pdf' => 'pdf',
            ];
            $extension = isset($mimeToExtension[$mimeType]) ? $mimeToExtension[$mimeType] : 'txt';
            $filename = Str::random(20) . '-' . time() . '.' . $extension;
            $path = File::put($location . '/' . $filename, $decodedContent);
        //   file_put_contents($location, base64_decode($docFile['document']['base64']));
        } else {
            $filenameWithExt = $document->getClientOriginalName();
            $extension = $document->getClientOriginalExtension();
            $filename = Str::random(20) . '-' . time() . '.' . $extension;
            $path = $document->move($location, $filename);
        }
        return $filename;
    }


    public function documentDelete($document_name, $id, $type, $location = null)
    {
        switch ($type) {
            case ('samgraId'):
                $location = config('global.samgraId') . $id . '/files/'.$document_name;
                break;
            case ('AadharCard'):
                $location = config('global.AadharCard') . $id . '/files/'.$document_name;
                break;
        }
        @unlink($location);
    }
    public function arraySortByColumn(&$arr, $col, $dir = SORT_ASC)
    {
        $sort_col = array();
        foreach ($arr as $key => $row) {
            $sort_col[$key] = $row[$col];
        }
        array_multisort($sort_col, $dir, $arr);
        return $arr;
    }
}
