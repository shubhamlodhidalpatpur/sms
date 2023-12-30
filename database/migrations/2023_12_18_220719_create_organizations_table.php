<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrganizationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('organizations', function (Blueprint $table) {
            $table->bigInteger('id')->autoIncrement();
            $table->string('organization_name',255);
            $table->string('email',255);
            $table->string('phone');
            $table->string('street',255);
            $table->biginteger('city_id');
            $table->integer('state_id');
            $table->integer('country_id');
            $table->biginteger('employee_strength',);
            $table->integer('created_by');
            $table->bigInteger('industry_type_id');
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
        Schema::dropIfExists('organizations');
    }
}
