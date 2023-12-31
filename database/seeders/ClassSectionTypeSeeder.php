<?php

namespace Database\Seeders;

use App\Models\ClassSectionType;
use Illuminate\Database\Seeder;

class ClassSectionTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ClassSectionType::insert([
            [
                'id' => 1,
                'title' => 'Class',
                'slug' => 'class',
                'parent_id' => 0,
            ],
            [
                'id' => 2,
                'title' => 'Section',
                'slug' => 'section',
                'parent_id' => 1,
            ],
        ]);
    }
}
