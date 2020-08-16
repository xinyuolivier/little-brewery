<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-3 product-box m-4 bg-white p-2" v-for="(beer,index) in beers" :key="index">
                        <router-link :to="{ path: '/beers/'+ beer.id}">
                            <img :src="beer.image" @error="beer.image='/beers/default.png'" :alt="beer.name" class="img-fluid">
                            <h5><span v-html="beer.name"></span>
                                <span class="small-text text-muted float-right">{{beer.price}} €</span>
                            </h5>
                        </router-link>
                        
                        <div class="row p-2">
                            <input class="col-md-4 mr-auto" :id="`units_${beer.id}`" value="1" v-model="units[beer.id]" :set="units[beer.id] == null ? units[beer.id] = 1 : null" type="number"  min="1" max="100" required/>
                            <button class="col-md-6 btn btn-sm btn-primary float-right" @click="addToCart(beer.id)">Add to Cart</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        beers: Array,
    },
    data(){
        return {
            units: [1],
        }
    },
    methods:{
        addToCart(beerId){
            let data = {
                beerId: beerId,
                units:Number(this.units[beerId]),
            };

            let localStore = [];
            localStore = JSON.parse(localStorage.getItem('brewery.cart')) || [];
            console.log(localStore);
            localStore.push(data);
            //let test = localStore.filter(x => x.beerId == beerId);
            //console.log(test);
            localStorage.setItem('brewery.cart', JSON.stringify(localStore));


        }
    }
}
</script>