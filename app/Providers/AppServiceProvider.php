<?php

namespace App\Providers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider {

    public function register() {
        $this->registerInertia();

    }

    public function boot() {
        //
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
                        'photoUrl' => Auth::user()->photoUrl(['w' => 40, 'h' => 40, 'fit' => 'crop']),
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
            'modal' => [
                'open' => false,
                'icon' => 'warning',
                'color' => 'red',
                'title' => 'Halpern Insurance',
                'message' => 'Halpern Insurance',
                'action' => [
                    'label' => 'Hey!',
                ],
            ],
        ]);
    }

}
