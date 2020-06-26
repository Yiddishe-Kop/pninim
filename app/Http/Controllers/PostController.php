<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller {

    public function __construct() {
        $this->middleware('auth', [
            'except' => ['index', 'show'],
        ]);
    }

    public function index() {
        return Inertia::render('Posts/Index', [
            'posts' => Post::with('user:id,name,is_approved,photo_path')->latest()->get(),
        ]);
    }

    public function create() {

    }

    public function store(Request $request) {

        $post = auth()->user()->posts()->create(
            $request->validate([
                'title' => 'required',
                'content' => 'required',
                'ref' => 'required',
                'status' => 'nullable',
            ])
        );

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
