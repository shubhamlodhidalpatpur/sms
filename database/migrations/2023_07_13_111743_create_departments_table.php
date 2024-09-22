<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
            Schema::create('departments', function (Blueprint $table) {
                $table->bigInteger('id')->autoIncrement()->unsigned();
                $table->string('title')->nullable(true);
                $table->string('slug')->nullable(true);
                $table->enum('status', ['A','D'])->nullable(true)->default('A');
                $table->timestamp('created_at')->nullable(true);
                $table->timestamp('updated_at')->nullable(true);
                
            });
    }

    
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('departments');
    }
};
