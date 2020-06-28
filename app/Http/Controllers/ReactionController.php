<?php

namespace App\Http\Controllers;

use App\Post;

class ReactionController extends Controller {

    public function __invoke(Post $post) {
        /**  @var  Cog\Contracts\Love\Reacter\Facades\Reacter $reactorFacade */
        $reactorFacade = request()->user()->viaLoveReacter();

        if ($reactorFacade->hasReactedTo($post, request('reaction'))) {
            $reactorFacade->unreactTo($post, request('reaction'));
        } else {
            $reactorFacade->reactTo($post, request('reaction'));
        }
        return redirect()->back();
    }

}
