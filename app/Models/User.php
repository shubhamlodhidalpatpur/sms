<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Activitylog\LogOptions;
use App\Traits\HasPermissionsTrait;
use App\Models\Notification;

use Laravel\Sanctum\HasApiTokens;
use Auth;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable,HasPermissionsTrait;
    public function __construct()
    {
        //$this->connection = env('TENANT_DB_CONNECTION');
    }


    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
        ->useLogName('User')
        ->setDescriptionForEvent(fn(string $eventName) => "{$eventName} User")
        ->logOnly(['*']);
    }

    /**

     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];
    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];
    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',

    ];
    public function roles()
    {
        return $this->belongsToMany('App\Models\Role', 'user_roles', 'user_id', 'role_id');
    }
    public function permissions()
    {
        return $this->roles->map->permissions->flatten(); //->pluck('name')->unique();
    }
    public function ability()
    {
        return $this->roles->map->ability->flatten()->map->only(['action', 'subject']); //->pluck('subject')->unique();
    }
    public function hasAdminRole()
    {
        if (Auth::guard('api')->user()->hasRole('super-admin')) {
            return true;
        } else {
            return false;
        }
    }
    public function notifications()
    {
        return $this->hasMany(Notification::class);
    }
}
