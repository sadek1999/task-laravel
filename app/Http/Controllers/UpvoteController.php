<?php

namespace App\Http\Controllers;

use App\Models\Feature;
use App\Models\Upvote;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UpvoteController extends Controller
{
    public function store(Request $request, Feature $feature)
    {
        $user = Auth::id();
        $data = $request->validate([
            'upvote' => ['required', 'boolean']
        ]);
        Upvote::updateOrCreate(
            ['feature_id' => $feature->id, 'user_id' => $user],
            ['upvote' => $data['upvote']]
        );
        return back();
    }

    public function destroy(Feature $feature)
    {
        $user = Auth::id();
        $feature->upvote()->where('user_id', $user)->delete();
        return back();
    }
    //
}
