<?php

namespace App\Http\Controllers;

use App\Http\Resources\FeatureResources;
use App\Models\Feature;
use Illuminate\Container\Attributes\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FeatureController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Feature::latest()->paginate();
        return Inertia::render('Feature/index', [
            'features' => FeatureResources::collection($data)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->Validate([
            'name' => ['sting', 'required'],
            'description' => ['nullable', 'string'],
        ]);
      
        Feature::create($data);
        return to_route('feature.index')->with('success','successfully create feature');
    }

    /**
     * Display the specified resource.
     */
    public function show(Feature $feature)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Feature $feature)
    {
        return Inertia::render("feature/Edit" ,[
            'feature'=>new FeatureResources($feature)
        ]) ;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Feature $feature)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Feature $feature)
    {
        $feature->delete();
        return to_route('feature.index')->with('success','successfully deleted feature');
    }
}
