<?php

namespace App\Providers;

use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;
use League\Glide\Server;

class AppServiceProvider extends ServiceProvider {

    public function register() {
        $this->registerInertia();
        $this->registerGlide();

    }

    public function boot() {
        Carbon::setLocale('he');
    }

    public function registerInertia() {
        Inertia::version(function () {
            return md5_file(public_path('mix-manifest.json'));
        });

        Inertia::share([
            'auth' => function () {
                return [
                    'user' => Auth::user() ? [
                        'id' => Auth::user()->id,
                        'name' => Auth::user()->name,
                        'email' => Auth::user()->email,
                        'photoUrl' => Auth::user()->photoUrl(['w' => 100, 'h' => 100, 'fit' => 'crop']),
                        'is_approved' => Auth::user()->is_approved,
                        'is_admin' => Auth::user()->is_admin,
                    ] : null,
                ];
            },
            'flash' => function () {
                return [
                    'success' => Session::get('success'),
                    'errorTitle' => Session::get('errorTitle'),
                    'error' => Session::get('error'),
                ];
            },
            'errors' => function () {
                return Session::get('errors')
                ? Session::get('errors')->getBag('default')->getMessages()
                : (object) [];
            },
            'old' => function () {
                return session()->getOldInput();
            },
        ]);
    }

    protected function registerGlide() {
        $this->app->bind(Server::class, function ($app) {
            return Server::create([
                'source' => Storage::getDriver(),
                'cache' => Storage::getDriver(),
                'cache_folder' => '.glide-cache',
                'base_url' => 'img',
            ]);
        });
    }

}
