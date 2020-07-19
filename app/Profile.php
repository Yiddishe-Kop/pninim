<?php

namespace App;

class Profile extends Model {

    protected $guarded = [];

    public function user() {
        return $this->belongsTo(User::class);
    }

}
