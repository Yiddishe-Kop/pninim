<?php

namespace App\Providers;

use Carbon\Carbon;
use Inertia\Inertia;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->registerInertia();
    }

    public function boot()
    {
        Carbon::setLocale('he');

        Inertia::macro('data', function ($page, $props = []) {
            if (request()->wantsJson()) {
                return new JsonResponse($props);
            }
            return Inertia::render($page, $props);
        });
    }

    public function registerInertia()
    {
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
            'modal' => [
              'open' => false,
              'icon' => 'warning',
              'color' => 'red',
              'title' => 'פנינים',
              'message' => 'פנינים',
              'action' => [
                'label' => 'Hey!',
              ],
            ],
        ]);
    }
}
