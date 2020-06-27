<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\URL;
use League\Glide\Server;

class User extends Authenticatable {
    use Notifiable;

    protected $fillable = [
        'name', 'email', 'password', 'photo_path',
    ];

    protected $hidden = [
        'password', 'remember_token', 'email_verified_at', 'updated_at',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'is_approved' => 'boolean',
        'is_admin' => 'boolean',
    ];

    protected $appends = ['photoUrl'];

    public function posts() {
        return $this->hasMany(Post::class);
    }

    public function setPasswordAttribute($password) {
        $this->attributes['password'] = Hash::needsRehash($password) ? Hash::make($password) : $password;
    }

    public function getPhotoUrlAttribute() {
        return $this->photoUrl(['w' => 100, 'h' => 100, 'fit' => 'crop']);
    }

    public function photoUrl(array $attributes) {
        if ($this->photo_path) {
            return URL::to(App::make(Server::class)->fromPath($this->photo_path, $attributes));
        }
    }
}
