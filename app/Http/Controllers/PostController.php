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
        return Inertia::data('Posts/Index', [
            'posts' => Post::with([
              'user',
              'comments.replies.user',
              'comments.user',
              'loveReactant.reactionCounters',
            ])->latest()
              ->paginate(10),
            'reactionTypes' => ReactionType::select('id', 'name')
              ->get()
              ->keyBy('id'),
            'newComment' => session('new_comment')
        ]);
    }

    public function create() {
      //
    }

    public function store(Request $request) {

        $post = auth()->user()->posts()->create(
            $request->validate([
                'title' => 'required|max:1024|string',
                'content' => 'required|max:5096|string',
                'ref' => 'required',
                'status' => 'nullable',
                'type' => sprintf('nullable|in:%s,%s,%s,%s',
                  Post::TYPE_BIUR,
                  Post::TYPE_CHIDDUSH,
                  Post::TYPE_NOTE,
                  Post::TYPE_QUESTION
                ),
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
