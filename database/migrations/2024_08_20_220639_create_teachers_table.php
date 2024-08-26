<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTeachersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('teachers', function (Blueprint $table) {
            $table->id();
            $table->string('employee_id')->nullable(true);
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
            $table->bigInteger('mobile_no')->nullable(true);
            $table->bigInteger('altranate_number')->nullable(true);
            $table->longText('address')->nullable(true);
            $table->enum('status', ['INPROGRESS', 'ACTIVE', 'INACTIVE','DELETED','PROFILE COMPLETED'])->nullable()->default('INPROGRESS');
            $table->string('samgra_id_doc')->nullable(true);
            $table->string('aadhar_doc')->nullable(true);
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
        Schema::dropIfExists('teachers');
    }
}
