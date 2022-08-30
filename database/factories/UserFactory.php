<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        // crete a fake usuer with a random uuid
        $users = [
            'uuid' => Str::uuid(),
            'lastname' => $this->faker->lastName,
            'firstname' => $this->faker->firstName,
            'telephone' => $this->faker->phoneNumber,
            'avatar' => $this->faker->imageUrl(),
            'email' => $this->faker->unique()->safeEmail,
            'role' => rand(0,1) ? 'user' : 'admin',
            'code_verified' => null,
            'email_verified_at' => now(),
            'last_login' => now(),
            'password' => bcrypt('secret'),
            'remember_token' => Str::random(10),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    
               
                return $users;
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    public function unverified()
    {
        return $this->state(function (array $attributes) {
            return [
                'email_verified_at' => null,
            ];
        });
    }
}
