<?php

namespace App\Http\Controllers;

use App\Post;

class ReactionController extends Controller {

    public function __invoke(Post $post) {
        /**  @var  Cog\Contracts\Love\Reacter\Facades\Reacter $reactorFacade */
        $reactorFacade = request()->user()->viaLoveReacter();
        $reactionType = request('reaction');

        // if already reacted this reaction: toggle
        if ($reactorFacade->hasReactedTo($post, $reactionType)) {
            $reactorFacade->unreactTo($post, $reactionType);
        } else {
            // mutually exclusive reactions
            if ($reactionType == 'Like' && $reactorFacade->hasReactedTo($post, 'Dislike')) {
                $reactorFacade->unreactTo($post, 'Dislike');
            } else if ($reactionType == 'Dislike' && $reactorFacade->hasReactedTo($post, 'Like')) {
                $reactorFacade->unreactTo($post, 'Like');
            }
            $reactorFacade->reactTo($post, $reactionType);
        }
        return redirect()->back();
    }

}
