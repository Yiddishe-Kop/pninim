<?php

namespace App;

class Comment extends Model {

  // relations
  public function user() {
    return $this->belongsTo(User::class);
  }

  public function replies() {
    return $this->hasMany(Comment::class, 'parent_id');
  }

  // accessors
  public function getRepliesCountAttribute() {
    return $this->replies()->count();
  }

  protected $with = ['user'];

  protected $appends = ['repliesCount'];
}
