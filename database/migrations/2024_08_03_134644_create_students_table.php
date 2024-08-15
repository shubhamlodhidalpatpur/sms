<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->string('roll_number')->nullable(true);
            $table->string('first_name')->nullable(true);
            $table->string('middle_name')->nullable(true);
            $table->string('last_name')->nullable(true);
            $table->bigInteger('user_id')->nullable(true);
            $table->string('father_name')->nullable(true);
            $table->string('mother_name')->nullable(true);
            $table->date('dob')->nullable(true);
            $table->enum('gender', ['Male','Female','Other'])->nullable(true);
            $table->string('aadhar_number')->nullable(true);
            $table->string('samgra_id')->nullable(true);
            $table->bigInteger('class_id')->nullable(true);
            $table->bigInteger('section_id')->nullable(true);
            $table->bigInteger('prsnol_number')->nullable(true);
            $table->bigInteger('parent_number')->nullable(true);
            $table->longText('address')->nullable(true);
            $table->longText('remark')->nullable(true);
            $table->bigInteger('subject')->nullable(true);
            $table->enum('status', ['INPROGRESS', 'ACTIVE', 'INACTIVE','DELETED','PROFILE COMPLETED'])->nullable()->default('INPROGRESS');
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
        Schema::dropIfExists('students');
    }
}
