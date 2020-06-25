<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller {

    public function index() {
        return Inertia::render('Posts/Index', [
            'posts' => Post::all(),
        ]);
    }

    public function create() {

    }

    public function store(Request $request) {

        $post = Post::create([
            'title' => $request->title,
            'content' => $request->content,
            'ref' => 'שבת קמ:',
            // 'user_id' => 1,
        ]);

        return redirect()->back()->with('success', 'Post created!' . $post->title);
    }

    public function show(Post $post) {
        //
    }

    public function edit(Post $post) {
        //
    }

    public function update(Request $request, Post $post) {
        //
    }

    public function destroy(Post $post) {
        $post->delete();
        return redirect()->back()->with('success', 'Post deleted!' . $post->title);
    }
}
