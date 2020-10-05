<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Support\Facades\Log;

class Comment extends Model {

  // relations
  public function user() {
    return $this->belongsTo(User::class);
  }

  public function replies() {
    return $this->hasMany(Comment::class, 'parent_id')->latest();
  }

  public function parent() {
    return $this->belongsTo(Comment::class, 'parent_id');
  }

  public function post() {
    return $this->belongsTo(Post::class)->with('user');
  }

  // accessors
  public function getRepliesCountAttribute() {
    return $this->replies()->count();
  }

  public function getCreatedAtAttribute($date) {
    return Carbon::parse($date)->diffForHumans();
  }

  protected $with = ['user'];

  protected $appends = ['repliesCount'];
}
