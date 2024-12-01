<?php

namespace App\Http\Controllers;

use App\Http\Resources\FeatureResources;
use App\Models\Feature;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class FeatureController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $currentUserId = Auth::id();
        $data = Feature::latest()
            ->withCount('upvote')
            // ->withExists([
            //     'upvotes as user_has_upvoted' => function ($query) use ($currentUserId) {
            //         $query->where('user_id', $currentUserId)
            //             ->where('upvote', 1);
            //     },
            //     'upvotes as user_has_downvoted' => function ($query) use ($currentUserId) {
            //         $query->where('user_id', $currentUserId)
            //             ->where('upvote', 0);
            //     }
            // ])
            // ->with([
            //     'upvotes' => function ($query) use ($currentUserId) {
            //         $query->where('user_id', $currentUserId);
            //     },
            //     'upvotes as user_has_upvoted' => function ($query) use ($currentUserId) {
            //         $query->where('user_id', $currentUserId)
            //             ->where('upvote', 1);
            //     },
            //     'upvotes as user_has_downvoted' => function ($query) use ($currentUserId) {
            //         $query->where('user_id', $currentUserId)
            //             ->where('upvote', 0);
            //     }
            // ])
            ->paginate();
        return Inertia::render('Feature/index', [
            'features' => FeatureResources::collection($data)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Feature/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user=Auth::id();
        $data = $request->validate([
            'name' => ['string', 'required'],
            'description' => ['nullable', 'string'],
        ]);


        $data['user_id'] = $user;
        Feature::create($data);
        return to_route('feature.index')->with('success', 'successfully create feature');
    }

    /**
     * Display the specified resource.
     */
    public function show(Feature $feature)
    {
        return Inertia::render('Feature/show', [
            'feature' => new FeatureResources($feature)
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Feature $feature)
    {
        return Inertia::render("Feature/edit", [
            'feature' => new FeatureResources($feature)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Feature $feature)
    {
        $data = $request->validate([
            'name' => ['required', 'string'],
            'description' => ['nullable', 'string']
        ]);

        $feature->update($data);
        return to_route('feature.index')->with('success', 'successfully Update Feature');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Feature $feature)
    {
        $feature->delete();
        return to_route('feature.index')->with('success', 'successfully deleted feature');
    }
}
