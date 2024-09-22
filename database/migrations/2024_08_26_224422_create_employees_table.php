<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmployeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->id();
            $table->string('first_name');     
            $table->string('middle_name');     
            $table->string('last_name');     
            $table->integer('department_id')->nullable(true);
            $table->integer('team_id')->nullable(true);
            $table->integer('reporting_to');
            $table->integer('reporting_role_id');
            $table->integer('role_id')->nullable(true);
            $table->enum('gender', ['male','female','other'])->nullable(true);
            $table->date('dob')->nullable(true);
            $table->integer('created_by');
            $table->integer('user_id');
            $table->timestamps();
            $table->bigInteger('mobile');
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('employees');
    }
}
