<template>
    <div>
        <div class="container-fluid hero-section d-flex align-content-center justify-content-center flex-wrap ml-auto">
            <h2 class="title">Little brewery</h2>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-4 product-box" v-for="(beer,index) in beers" :key="index">
                            <router-link :to="{ path: '/beers/'+beer.id}">
                                <img :src="beer.image" :alt="beer.name">
                                <h5><span v-html="beer.name"></span>
                                    <span class="small-text text-muted float-right">$ {{beer.price}}</span>
                                </h5>
                                <button class="col-md-4 btn btn-sm btn-primary float-right">Acheter</button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {getBeers} from '@/api/api';

    export default {
        data(){
            return {
                beers : []
            }
        },
        created(){
            getBeers().then(response => this.beers = response)      
        }
    }
</script>
