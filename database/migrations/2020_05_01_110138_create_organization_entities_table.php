<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrganizationEntitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('org_entities', function (Blueprint $table) {
            $table->biginteger('id')->autoIncrement();
            $table->string('name');
            $table->integer('parent_id');
            $table->integer('reporting_head');
            $table->integer('org_entity_type_id');
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
        Schema::dropIfExists('org_entities');
    }
}
