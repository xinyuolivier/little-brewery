<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->integer('orderid');
            $table->unsignedBigInteger('beerid');
            $table->unsignedBigInteger('merchantid'); 
            $table->unsignedBigInteger('breweryid');
            $table->unsignedInteger('quantity')->default(1);
            $table->boolean('delivered')->default(false);
            $table->timestamps();

            $table->foreign('beerid')->references('id')->on('beers');
            $table->foreign('merchantid')->references('id')->on('users');
            $table->foreign('breweryid')->references('id')->on('breweries');
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS = 0');
        Schema::dropIfExists('orders');
        DB::statement('SET FOREIGN_KEY_CHECKS = 1');
        
    }
}
