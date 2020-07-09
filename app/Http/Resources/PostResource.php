<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource {

    public function toArray($request) {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'content' => $this->content,
            'ref' => $this->ref,
            'created_at' => $this->created_at,
            'username' => $this->user->name,
            'avatar' => $this->user->photoUrl,
            'reactions' => $this->loveReactant->reactionCounters->map->only(['count', 'weight', 'reaction_type_id']),
        ];

    }

}
