<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FeatureResources extends JsonResource
{
    public static $wrap=false;
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'=>$this->id,
            'name'=>$this->name,
            'description'=>$this->description,
            'user'=>new UserResource($this->user),
            'created_at'=>$this->created_at->format('Y-m-d H:i:s'),
            'upvote_count'=>$this->upvote_count?:0,
            'user_has_upvote'=>(bool)$this->user_has_upvoted,
            'user_has-downvote'=>(bool)$this->user_has_downvoted,
            'comment'=>$this->comment->map(function($comment){
                return[
                    'id'=>$comment->id,
                    'comment'=>$comment->comment,
                    'user'=>new UserResource($comment->user),
                    'created_at'=>$comment->created_at->format('Y-m-d H:i:s'),
                ];
            }),

        ];
    }
}
