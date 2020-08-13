<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Beer extends Model
{
    protected $fillable = [
        'beername', 'breweryid', 'flavor','color','packaging', 'image', 'price', 'quantity',
    ];

    public function orders(){
        return $this->hasMany(Order::class);
    }
}
