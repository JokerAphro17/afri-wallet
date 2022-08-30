<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->string('uuid')->unique();
            $table->string('moyen_paiement');
            $table->string('devise_envoyee');
            $table->string('devise_recue');
            $table->float('montant_envoye');
            $table->float('montant_recu');
            $table->string('adress_sender');
            $table->string('adress_receiver');
            $table->foreignId('user_id')->constrained();
            $table->foreign('devise_envoyee')->references('sigle')->on('monnaies');
            $table->foreign('devise_recue')->references('sigle')->on('monnaies');
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
        Schema::dropIfExists('transactions');
    }
}
