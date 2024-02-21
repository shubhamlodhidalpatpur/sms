<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class UpdateTeacherTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        for ($i = 0; $i < 3000; $i++) {
            DB::table('Teacher')->insert([
                'Name' => 'shubham',
                'mobile' => '9752122747',
                // Add more columns as needed
            ]);
        }

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        DB::table('your_table_name')->where('column1', 'value1')->delete();
    }
}
