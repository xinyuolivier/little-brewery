<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

    Route::post('login', 'UserController@login');
    Route::post('register', 'UserController@register');
    Route::get('/beers', 'BeerController@index');
    Route::post('/upload-file', 'BeerController@uploadFile');
    Route::get('/beers/{beer}', 'BeerController@show');

    Route::group(['middleware' => 'auth:api'], function(){
        Route::get('/users','UserController@index');
        Route::get('users/{user}','UserController@show');
        Route::patch('users/{user}','UserController@update');
        Route::get('users/{user}/orders','UserController@showOrders');
        Route::patch('orders/{order}/deliver','OrderController@deliverOrder');
        Route::resource('/orders', 'OrderController');
        Route::resource('/beers', 'BeerController')->except(['index','show']);
    });
