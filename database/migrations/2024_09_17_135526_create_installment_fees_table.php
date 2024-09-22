<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInstallmentFeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('installment_fees', function (Blueprint $table) {
            $table->id();
            $table->date('from_date')->nullable(true);
            $table->date('till_date')->nullable(true);
            $table->bigInteger('amount')->nullable(true);
            $table->bigInteger('class_id')->nullable(true);
            $table->string('remark')->nullable(true);
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
        Schema::dropIfExists('installment_fees');
    }
}
