<?php

namespace App\Http\Controllers;

use App\User;
use Cog\Laravel\Love\ReactionType\Models\ReactionType;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class UserController extends Controller {

  public function index() {

    $this->authorize('viewAny', User::class);

    return Inertia::render('Users/Index', [
      'users' => User::paginate()
        ->transform(function ($user) {
          return [
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            'is_approved' => $user->is_approved,
            'is_admin' => $user->is_admin,
            'photoUrl' => $user->photoUrl,
          ];
        }),
    ]);
  }

  public function create() {
    $this->authorize('create', User::class);
    return Inertia::render('Users/Create');
  }

  public function store() {
    $this->authorize('create', User::class);
    Request::validate([
      'name' => ['required', 'max:50'],
      'email' => ['required', 'max:50', 'email', Rule::unique('users')],
      'password' => ['nullable'],
      'photo' => ['nullable', 'image'],
    ]);

    User::create([
      'name' => Request::get('name'),
      'email' => Request::get('email'),
      'password' => Request::get('password'),
      'photo_path' => Request::file('photo') ? Request::file('photo')->store('users') : null,
    ]);

    return Redirect::route('users')->with('success', 'User created.');
  }

  public function show(User $user) {
    $posts = $user->posts()
      ->when(optional(auth()->user())->is($user), function ($query) {
        return $query->withTrashed();
      })
      ->with([
        'loveReactant.reactionCounters',
        'comments.replies.user',
        'comments.user',
      ])
      ->latest()
      ->paginate(20);
    // manually set the user relation to each post (as no need to refetch from the DB - optimization)
    collect($posts->items())->map->setRelation('user', $user);
    return Inertia::render('Users/Show', [
      'user' => $user,
      'posts' => $posts,
      'comments' => $user->comments()
        ->with('parent.user')->get()
        ->each(fn($c) => !$c->parent ? $c->setRelation('parent', $c->post) : ''), // if it doesn't have a parent comment - set the post as the parent
      'reactionTypes' => ReactionType::select('id', 'name')->get()->keyBy('id'),
      'counts' => [
        'posts' => $posts->count(),
        'comments' => $user->comments()->count()
      ],
    ]);
  }

  public function edit(User $user) {
    $this->authorize('update', $user);
    return Inertia::render('Users/Edit', [
      'user' => [
        'id' => $user->id,
        'name' => $user->name,
        'email' => $user->email,
        'photo' => $user->photoUrl(['w' => 60, 'h' => 60, 'fit' => 'crop']),
        'is_approved' => $user->is_approved,
        'is_admin' => $user->is_admin,
      ],
    ]);
  }

  public function update(User $user) {
    $this->authorize('update', $user);
    Request::validate([
      'name' => ['required', 'max:255'],
      'email' => ['required', 'max:255', 'email', Rule::unique('users')->ignore($user->id)],
      'password' => ['nullable', 'confirmed', 'string', 'min:8'],
      'avatar' => ['nullable'],
    ]);

    $user->update(Request::only('name', 'email'));

    if (Request::get('avatar')) {
      $user->update(['photo_path' => request('avatar')]);
    }

    if (Request::get('password')) {
      $user->update(['password' => Request::get('password')]);
    }

    return Redirect::back()->with('success', 'User updated.');
  }

  public function approve(User $user) {
    $this->authorize('approve', User::class);
    $user->update([
      'is_approved' => true,
    ]);
    return Redirect::back()->with('success', 'User has been approved.');
  }

  public function unapprove(User $user) {
    $this->authorize('approve', User::class);
    $user->update([
      'is_approved' => false,
    ]);
    return Redirect::back()->with('success', 'User has been denied access.');
  }

  public function destroy(User $user) {
    $this->authorize('delete', $user);
    $user->delete();

    return Redirect::back()->with('success', 'User deleted.');
  }

  public function restore(User $user) {

    $this->authorize('restore', $user);
    $user->restore();

    return Redirect::back()->with('success', 'User restored.');
  }
}
