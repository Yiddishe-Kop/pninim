<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource {

    public function toArray($request) {

        return [
            'title' => $this->title,
            'content' => $this->content,
            'ref' => $this->ref,
            'created_at' => $this->created_at,
        ];

    }

}
