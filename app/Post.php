<?php

namespace App;

use Carbon\Carbon;
use Cog\Contracts\Love\Reactable\Models\Reactable as ReactableContract;
use Cog\Laravel\Love\Reactable\Models\Traits\Reactable;
use Illuminate\Database\Eloquent\SoftDeletes;

class Post extends Model implements ReactableContract {
    use Reactable, SoftDeletes;

    protected $guarded = [];

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function getCreatedAtAttribute($date) {
        return Carbon::parse($date)->diffForHumans();
    }

}
