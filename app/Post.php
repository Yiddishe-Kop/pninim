<?php

namespace App;

use Carbon\Carbon;
use Cog\Contracts\Love\Reactable\Models\Reactable as ReactableContract;
use Cog\Laravel\Love\Reactable\Models\Traits\Reactable;
use Illuminate\Database\Eloquent\SoftDeletes;

class Post extends Model implements ReactableContract {
  use Reactable, SoftDeletes;

  const TYPE_QUESTION = 'שאלה';
  const TYPE_CHIDDUSH = 'חידוש';
  const TYPE_NOTE = 'הערה';
  const TYPE_BIUR = 'ביאור';

  protected $guarded = [];

  // relations
  public function user() {
    return $this->belongsTo(User::class);
  }

  public function comments() {
    return $this->hasMany(Comment::class)->whereNull('parent_id');
  }

  // accessors
  public function getCreatedAtAttribute($date) {
    return Carbon::parse($date)->diffForHumans();
  }
}
