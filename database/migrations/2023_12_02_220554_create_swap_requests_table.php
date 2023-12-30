<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSwapRequestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('swap_requests', function (Blueprint $table) {
            $table->id();
            $table->date('request_date')->nullable(true);
            $table->string('mode')->nullable(true);
            $table->time('in_time')->nullable(true);
            $table->time('out_time')->nullable(true);
            $table->string('reason')->nullable(true);
            $table->enum('status', ['open','inprogress','approved','rejected'])->nullable(true)->default('open');
            $table->bigInteger('request_user_id')->nullable(true);
            $table->bigInteger('approver')->nullable(true);
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
        Schema::dropIfExists('swap_requests');
    }
}
