<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\OrgStructure;

class OrgStructureSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        OrgStructure::insert([
            [
                'id' => 1,
                'level' => 1,
                'title' => 'Organization',
                'slug' => 'organization',
                'parent_id' => 0,
            ],
            [
                'id' => 2,
                'level' => 2,
                'title' => 'BU',
                'slug' => 'bu',
                'parent_id' => 0,
            ],
            [
                'id' => 3,
                'level' => 3,
                'title' => 'Branch',
                'slug' => 'branch',
                'parent_id' => 1,
            ],
            [
                'id' => 4,
                'level' => 4,
                'title' => 'Department',
                'slug' => 'department',
                'parent_id' => 2,
            ],
            [
                'id' => 5,
                'level' => 5,
                'title' => 'Team',
                'slug' => 'team',
                'parent_id' => 3,
            ],
            [
                'id' => 6,
                'level' => 6,
                'title' => 'Individual',
                'slug' => 'individual',
                'parent_id' => 4,
            ],
        ]);
    }
}
