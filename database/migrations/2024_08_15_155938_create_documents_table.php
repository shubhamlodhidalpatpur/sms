<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDocumentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('documents', function (Blueprint $table) {
            $table->bigInteger('id')->autoIncrement();
            $table->integer('user_id')->nullable();
            $table->integer('role_id')->nullable();
            $table->string('document_name')->nullable();
            $table->string('file_name')->nullable();
            $table->string('document_orignal_name')->nullable(true);
            $table->datetime('document_upload_time')->nullable(true);
            $table->enum('status', ['pending','approve','reject'])->nullable(true)->default('pending');
            $table->softDeletes();
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
        Schema::dropIfExists('documents');
    }
}
