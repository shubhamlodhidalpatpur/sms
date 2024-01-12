<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateScheduleLecturesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('schedule_lectures', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('class_id')->nullable(true);
            $table->bigInteger('lecture_number')->nullable(true);
            $table->string('lecture_start_time')->nullable(true);
            $table->string('lecture_end_time')->nullable(true);
            $table->bigInteger('subject_teacher_id')->nullable(true);
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
        Schema::dropIfExists('schedule_lectures');
    }
}
