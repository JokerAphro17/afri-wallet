<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Database\Seeders\UserSeeder;
use Database\Seeders\ClientSeeder;

use Database\Seeders\MonnaieSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        //  \App\Models\User::factory(57)->create();
         $this->call(ClientSeeder::class);
         $this->call(MonnaieSeeder::class);
         $this->call(UserSeeder::class);
         $this->call(TransactionSeeder::class);
    }
}