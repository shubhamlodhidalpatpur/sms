<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class IndustryTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('industry_types')->insert([
            [
                'id' => 1,
                'name' => 'Software Company',
                'created_at' => now()
            ],
            [
                'id' => 2,
                'name' => 'Textile',
                'created_at' => now()
            ],
            [
                'id' => 3,
                'name' => 'Aggriculture',
                'created_at' => now()
            ],
            [
                'id' => 4,
                'name' => 'Medical',
                'created_at' => now()
            ],
            [
                'id' => 5,
                'name' => 'Pharmaceutical',
                'created_at' => now()
            ],
        ]);
    }
}
