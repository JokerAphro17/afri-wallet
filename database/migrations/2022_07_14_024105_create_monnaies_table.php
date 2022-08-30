<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMonnaiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('monnaies', function (Blueprint $table) {
            $table->id();
            $table->string('nom');
            $table->string('uuid')->unique();
            $table->string('image')->nullable();
            $table->string('sigle')->unique();
            $table->string('devise');
            $table->float('taux_change');
            $table->float('stock');
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
        Schema::dropIfExists('monnaies');
    }
}
