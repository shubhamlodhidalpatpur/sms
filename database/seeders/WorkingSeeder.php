<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;
class WorkingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('working_days')->insert([
            [
                'id' => 1,
                'title' => 'Sunday',
                'day_no' => '1',
                'working' => '0',

            ],
            [
                'id' => 2,
                'title' => 'Monday',
                'day_no' => '2',
                'working' => '0',

            ],
            [
                'id' => 3,
                'title' => 'Tuesday',
                'day_no' => '3',
                'working' => '0',

            ],
            [
                'id' => 4,
                'title' => 'Wednesday',
                'day_no' => '4',
                'working' => '0',

            ],
            [
                'id' => 5,
                'title' => 'Thursday',
                'day_no' => '5',
                'working' => '0',

            ],
            [
                'id' => 6,
                'title' => 'Friday',
                'day_no' => '6',
                'working' => '0',

            ],
            [
                'id' => 7,
                'title' => 'Saturday',
                'day_no' => '7',
                'working' => '0',

            ],
           
         
        ]);
    }
}
