<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Illuminate\Database\Eloquent\Model;
use App\Models\OrgStructure;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\SoftDeletes;

class OrganizationEntity extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $fillable = ['name', 'reporting_head', 'parent_id', 'org_entity_type_id', 'master_table_data_id', 'status', 'checker', 'approver', 'created_at', 'updated_at'];//phpcs:ignore
    
    protected $table = 'org_entities';

    public function teamMembers()
    {
        return $this->hasMany(static::class, 'parent_id')
                // ->leftJoin('organization_entities as oe', 'oe.id', 'company_goals.goal_for_org_entity')
                ->leftJoin('org_structure as og', 'og.id', 'organization_entities.org_entity_type_id')
                ->where('og.slug', 'individual');
    }

    public function getChecker()
    {
        return $this->belongsTo(OrganizationEntity::class, 'checker', 'id');
    }
    public function user()
    {
        return $this->belongsTo(User::class, 'master_table_data_id', 'id');
    }

    public function getApprover()
    {
        return $this->belongsTo(OrganizationEntity::class, 'approver', 'id');
    }


    public function reportingHead()
    {
        return $this->belongsTo(OrganizationEntity::class, 'reporting_head', 'id');
    }
    
    public function entityType()
    {
        return $this->belongsTo(OrgStructure::class, 'org_entity_type_id', 'id');
    }

    // protected function otherDetails(): Attribute
    // {
    //     return Attribute::make(
    //         get: fn ($value) => is_null($value)? null : json_decode($value),
    //     );
    // }

    public function organization()
    {
        return $this->belongsTo(OrganizationEntity::class, 'organization_id', 'id');
    }
}
