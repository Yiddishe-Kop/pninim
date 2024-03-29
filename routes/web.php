<?php

use App\Mail\TestMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Route::get('/', 'PostController@index')->name('home');

// Route::get('/mail', function () {
//    Mail::to('newgraphil@gmail.com')->send(new TestMail());
//    return new TestMail();
// });

// Uploads
Route::post('/upload', 'UploadController');

// Images
Route::get('/img/{path}', 'ImagesController@show')->where('path', '.*');

Route::post('logout', 'Auth\LoginController@logout')->name('logout');
Route::get('access-denied', 'Auth\LoginController@unapproved');

Route::middleware('guest')->group(function () {
    Route::get('register', 'Auth\RegisterController@showRegisterForm')->name('register');
    Route::post('register', 'Auth\RegisterController@register')->name('register.attempt');
    Route::get('login', 'Auth\LoginController@showLoginForm')->name('login');
    Route::post('login', 'Auth\LoginController@login')->name('login.attempt');
});

Route::middleware('admin')->group(function () {
    Route::post('{user}/approve', 'UserController@approve')->name('users.approve');
    Route::post('{user}/unapprove', 'UserController@unapprove')->name('users.unapprove');
});

Route::middleware('approved')->group(function () {
});

Route::middleware('auth')->group(function () {
    Route::post('/posts/{post}/react', 'ReactionController')->name('posts.react');
    Route::post('/posts/{post}/comment', 'CommentController@store')->name('comments.store');
    Route::get('/comments/{comment}/replies', 'CommentController@replies')->name('comment.replies');
    Route::delete('/comments/{comment}', 'CommentController@destroy')->name('comment.destroy');
});

Route::put('posts/{post}/restore', 'PostController@restore')->name('posts.restore');
Route::delete('posts/{post}/force', 'PostController@forceDelete')->name('posts.forceDelete');

Route::resources([
   'posts' => 'PostController',
   'users' => 'UserController',
]);

Route::get('/img/{path}', 'ImagesController@show')
    ->where('path', '.*')
    ->name('image');
