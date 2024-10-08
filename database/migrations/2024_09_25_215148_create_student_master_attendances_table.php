<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudentMasterAttendancesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('student_master_attendances', function (Blueprint $table) {
            $table->id();
            $table->date('attendance_date')->nullable(true);
            $table->bigInteger('total_attendance_count')->nullable(true);
            $table->bigInteger('attendance_persent')->nullable(true);
            $table->bigInteger('class_id')->nullable(true);
            $table->enum('status', ['Open','Completed','in_progress','closed'])->nullable(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('student_master_attendances');
    }
}
