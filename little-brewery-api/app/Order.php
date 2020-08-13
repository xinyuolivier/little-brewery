<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'orderid', 'beerid', 'merchantid', 'breweryid', 'quantity', 'unitprice', 'delivered'
    ];

    public function user()
        {
            return $this->belongsTo(User::class, 'id');
        }

    public function beer()
        {
            return $this->belongsTo(Beer::class, 'id');
        }
}
