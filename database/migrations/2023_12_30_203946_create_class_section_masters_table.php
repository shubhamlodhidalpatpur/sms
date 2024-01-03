<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClassSectionMastersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('class_section_masters', function (Blueprint $table) {
            $table->biginteger('id')->autoIncrement();
            $table->string('name');
            $table->integer('parent_id');
            $table->integer('class_section_type_id');
            $table->integer('class_teacher')->nullable(true);
            $table->enum('status', ['A','I'])->default('A');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('class_section_masters');
    }
}
