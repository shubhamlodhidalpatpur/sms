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
            DB::table('Supplier')->insert([
                'Name' => 'shubham',
                'Mobile' => '9752122747',
                'Email' => 'Shubham@gmail.com',
                'Email' => 'Shubham@gmail.com',
                'DOB'=>'2024-01-29T17:47:21.000000Z',
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
