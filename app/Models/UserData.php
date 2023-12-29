<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

class UserData extends Model
{
    use HasFactory;
    protected $table = 'user_data';

    public function getUserDataAttribute()
    {
        return json_decode($this->data);
    }

    // protected function data(): Attribute
    // {
    //     return Attribute::make(
    //         get: fn (string $value) => json_encode($value),
    //     );
    // }
}
