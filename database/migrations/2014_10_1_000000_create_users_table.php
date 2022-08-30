<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('uuid')->unique();
            $table->string('lastname');
            $table->string('firstname');
            $table->string('avatar')->nullable();
            $table->string('telephone')->unique()->nullable();
            $table->string('email')->unique();
            $table->enum('status',['mail','identitie','address','none'])->default('none');
            $table->enum('role', ['superadmin','admin', 'user'])->default('user');
            $table->string('code_verified')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->timestamp('last_login')->nullable();
            $table->string('password');
            $table->boolean('is_active')->default(true);
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}
