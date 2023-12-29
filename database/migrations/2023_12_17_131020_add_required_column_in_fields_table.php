<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRequiredColumnInFieldsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('fields', function (Blueprint $table) {
            $table->string('field_value')->nullable();
            $table->boolean('required')->default(0)->nullable();
            $table->boolean('is_default_field')->default(0)->nullable();
            $table->bigInteger('default_field_parent_id')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('fields', function (Blueprint $table) {
            $table->dropColumn('field_value');
            $table->dropColumn('required');
            $table->dropColumn('is_default_field');
        });
    }
}
