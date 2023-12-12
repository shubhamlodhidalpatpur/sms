<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLeaveTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('leave_types', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable(true);
            $table->string('deduction')->nullable(true);
            $table->integer('allotment')->nullable(true);
            $table->string('allotment_type')->nullable(true);
            $table->enum('laps', ['yes','no'])->nullable(true);
            $table->integer('max_allotment_count')->nullable(true);
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
        Schema::dropIfExists('leave_types');
    }
}
