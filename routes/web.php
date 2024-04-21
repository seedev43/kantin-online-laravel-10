<?php

use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\MainController;
use App\Http\Controllers\VerificationController;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// User Routes
Route::get('/', [MainController::class, 'index'])->name('index');
Route::get('/login', [AuthController::class, 'login'])->name('login');
Route::get('/register', [AuthController::class, 'register'])->name('register');

Route::post('/action/login', [AuthController::class, 'process_login'])->name('process_login');
Route::post('/action/register', [AuthController::class, 'process_register'])->name('process_register');

Route::get('/logout', [AuthController::class, 'logout'])->name('logout');

// Email Verification Routes
Route::middleware(['auth'])->group(function () {
    Route::controller(VerificationController::class)->group(function () {
        Route::get('/email/verify', 'notice')->name('verification.notice');
        Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
            $request->fulfill();

            return redirect('/')->with('message', 'Email successfully verified');
        })->middleware(['signed'])->name('verification.verify');

        Route::post('/email/verification-notification', function (Request $request) {
            $request->user()->sendEmailVerificationNotification();

            return back()->with('message', 'Verification link sent!');
        })->middleware(['throttle:6,1'])->name('verification.send');
    });
});


// Admin Routes
Route::prefix('admin')->group(function () {
    Route::middleware(['auth.admin'])->group(function () {
        Route::get('/', [AdminController::class, 'index'])->name('admin_index');

        Route::resource('product', ProductController::class);
    });

    Route::get('/login', [AdminController::class, 'login'])->name('admin_login');

    Route::post('/action/login', [AdminController::class, 'process_login'])->name('admin_process_login');

    Route::get('/logout', [AdminController::class, 'logout'])->name('admin_logout');
});
