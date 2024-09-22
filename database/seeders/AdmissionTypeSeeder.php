<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;
class AdmissionTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $paymentTypes = [
            ['title' => 'Admission', 'status' => 'A'],
            ['title' => 'School Fees', 'status' => 'A'],
            ['title' => 'School Bus', 'status' => 'A'],
            ['title' => 'Diary', 'status' => 'A'],
            ['title' => 'Lunch', 'status' => 'A'],
            ['title' => 'Computer', 'status' => 'A'],
            ['title' => 'Examination', 'status' => 'A'],
            ['title' => 'Tour', 'status' => 'A'],
            ['title' => 'Medical', 'status' => 'A'],
            ['title' => 'Graduation', 'status' => 'A'],
            ['title' => 'Activity Fees', 'status' => 'A']
        ];

        foreach ($paymentTypes as $type) {
            DB::table('admission_types')->insert([
                'title' => $type['title'],
                'status' => $type['status'],
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);
        }
    }
}
