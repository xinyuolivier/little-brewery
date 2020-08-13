<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Order;
use App\Brewery;
use App\Beer;
use App\User;
use Faker\Generator as Faker;

$factory->define(Order::class, function (Faker $faker) {
    return [
        'orderid' => $faker->unique(),
        'breweryid' => Brewery::inRandomOrder()->value('id'),
        
    ];
});
