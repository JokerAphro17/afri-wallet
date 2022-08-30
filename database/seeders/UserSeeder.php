<?php

namespace Database\Seeders;

use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        

        // crete a fake usuer with a random uuid

        $users = [
            'uuid' => Str::uuid(),
            'lastname' => 'Ilboudo',
            'firstname' => 'Souleymane',
            'telephone' => '+226 55993984',
            'avatar' => '',
            'email' => 'ilboudosouleymane4@gmail.com',
            'role' => 'superadmin',
            'code_verified' => null,
            'email_verified_at' => now(),
            'last_login' => now(),
            'password' => bcrypt('secret'),
            'remember_token' => Str::random(10),
            'created_at' => now(),
            'updated_at' => now(),
        ];
                
        
            User::create($users);
    }
}
