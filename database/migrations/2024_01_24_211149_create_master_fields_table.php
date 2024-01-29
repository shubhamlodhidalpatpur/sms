<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMasterFieldsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('master_fields', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug');
            $table->bigInteger('field_type_id')->unsigned();
            $table->string('validation_rule');
            $table->string('master_id');
            $table->string('field_value')->nullable();
            $table->tinyInteger('required')->nullable()->default(0);
            $table->tinyInteger('show_list')->nullable()->default(0);
            $table->tinyInteger('show_filter')->nullable()->default(0);
            $table->tinyInteger('is_default_field')->nullable()->default(0);
            $table->bigInteger('default_field_parent_id')->nullable();
            $table->foreign('field_type_id')->references('id')->on('field_types')->onDelete('cascade');
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
        Schema::dropIfExists('master_fields');
    }
}
