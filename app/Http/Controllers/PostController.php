<?php

namespace App\Http\Controllers;

use App\Post;
use Cog\Laravel\Love\ReactionType\Models\ReactionType;
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
            'posts' => Post::with([
                'user',
                'loveReactant.reactionCounters',
            ])->latest()
                ->get(),
            'reactionTypes' => ReactionType::select('id', 'name')
                ->get()
                ->keyBy('id'),
        ]);
    }

    public function create() {

    }

    public function store(Request $request) {

        $post = auth()->user()->posts()->create(
            $request->validate([
                'title' => 'required|max:1024|string',
                'content' => 'required|max:5096|string',
                'ref' => 'required',
                'status' => 'nullable',
            ])
        );

        return back()->with('success', 'Post created!' . $post->title);
    }

    public function show(Post $post) {
        //
    }

    public function edit(Post $post) {
        //
    }

    public function update(Request $request, Post $post) {
        $this->authorize('update', $post);
        $post->update(
            $request->validate([
                'title' => 'required|max:1024|string',
                'content' => 'required|max:5096|string',
            ])
        );
        return back()->with('success', 'Post updated!');
    }

    public function destroy(Post $post) {
        $this->authorize('delete', $post);
        $post->delete();
        return back()->with('success', 'Post deleted!' . $post->title);
    }

    public function forceDelete(Post $post) {
        $this->authorize('forceDelete', $post);
        $post->forceDelete();
        return back()->with('success', 'Post permanently deleted!');
    }

    public function restore(Post $post) {
        $this->authorize('restore', $post);
        $post->restore();
        return back()->with('success', 'Post restored!' . $post->title);
    }
}
