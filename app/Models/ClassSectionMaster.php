<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClassSectionMaster extends Model
{
    use HasFactory;
   public function children(){

    $relation = $this->hasMany(static::class, 'parent_id')
    ->leftJoin('class_section_types', 'class_section_types.id', 'class_section_masters.class_section_type_id')
    ->select(
        'class_section_masters.*',
    );
    return $relation;
   }
}
