<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Utility\UtilityClass;

class UtitlityServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app->bind('utilityclass', function () {
            return new UtilityClass();
        });
    }
}
