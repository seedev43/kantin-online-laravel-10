<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class VerificationController extends Controller
{
    public function notice()
    {
        return view('pages.verification_email');
    }
}
