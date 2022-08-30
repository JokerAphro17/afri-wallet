<?php

namespace Database\Factories;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class TransactionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'uuid' => $this->faker->uuid,
            'moyen_paiement' => 'card',
            'devise_envoyee' => 'btc',
            'devise_recue' => 'eth',
            'montant_envoye' => $this->faker->randomFloat(2, 0, 100),
            'montant_recu' => $this->faker->randomFloat(2, 0, 100),
            'adress_sender' => Str::random(10),
            'adress_receiver' => Str::random(10),
            'user_id' => rand(1, 30),
        ];
    }

    
}
