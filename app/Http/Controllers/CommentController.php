<?php

namespace App\Http\Controllers;

use App\Comment;
use App\Post;
use Illuminate\Http\Request;

class CommentController extends Controller {

  public function store(Request $request, Post $post) {

    $data = $request->validate([
      'content' => 'string|max:2048',
      'parent_id' => 'nullable|exists:comments,id',
    ]);

    $comment = new Comment();
    $comment->content = $data['content'];
    $comment->user()->associate($request->user());
    $comment->parent_id = $data['parent_id'];
    $post->comments()->save($comment);

    return back()->with('success', 'Your comment has been saved successfully!');
  }

}
