<?php

use App\Post;
use App\User;
use App\Http\Resources\PostResource;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

// TEMP to reset user pawwsord [! not secure]
Route::get('users/{user}/set-password/{password}', function (User $user, $password) {
    return $user->update([
        'password' => $password
    ]);
});

Route::get('/posts', function () {
    return response()->json(
        PostResource::collection(
            Post::latest()->limit(8)->get()
        )
    );
});
