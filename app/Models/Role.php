<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Activitylog\LogOptions;
use DB;

class Role extends Model
{
    use HasFactory;

    public function permissions()
    {
        return $this->belongsToMany('App\Models\Tenant\Permission', 'roles_permissions', 'role_id', 'permission_id');
    }

    public function ability()
    {
        return $this->belongsToMany('App\Models\Permission', 'roles_permissions', 'role_id', 'permission_id')
                ->select(DB::raw("'do' as action"), 'slug as subject');
    }

    public function users()
    {
        return $this->belongsToMany('App\Models\User');
    }

    public function allowTo($permission)
    {
        return $this->permissions()->save($permission);
    }
}
