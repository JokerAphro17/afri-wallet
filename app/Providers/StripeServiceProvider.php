<?php

namespace App\Providers;

use App\Services\StripeService;
use Illuminate\Support\ServiceProvider;

class StripeServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(StripeService::class, function ($app) {
            return new StripeService(env('STRIPE_SECRET'));
        });
        
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
