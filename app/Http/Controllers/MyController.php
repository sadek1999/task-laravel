<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class MyController extends Controller
{
    public function index(){
        $users=User::all();
        return $users;

    }
}
