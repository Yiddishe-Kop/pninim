<?php

namespace App\Http\Middleware;

use Closure;

class Approved {
    public function handle($request, Closure $next) {
        if (!auth()->check() || !auth()->user()->is_approved) {
            return redirect('access-denied');
        } else {
            return $next($request);
        }
    }
}
