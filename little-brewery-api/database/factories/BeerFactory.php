<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Beer;
use App\Brewery;
use Faker\Generator as Faker;

$factory->define(Beer::class, function (Faker $faker) {
    $beername = $faker->unique()->word;
    return [
        'beername' => $beername,
        'breweryid' => Brewery::inRandomOrder()->value('id'),
        'flavor' => $faker->randomElement(['fruité & charnu', 'fruité & frais', 
                                          'fruité & léger', 'puissant avec du potentiel',
                                          'riche & puissant', 'riche & rond']),
        'color' => $faker->randomElement(['ambrée', 'blanche', 'blonde', 'rosée', 'rubis']),
        'packaging' => $faker->randomElement(['bouteille', 'fût', 'tireuse']),
        'quantity' => $faker->randomDigit,
        'price' => $faker->randomFloat($nbMaxDecimals = 2, $min = 1, $max = 100),
        'image' => $beername.'.png',
        
    ];
});
