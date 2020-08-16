<template>
    <div>
        <Banner />
        <!--
        <div class="container-fluid hero-section d-flex align-content-center justify-content-center flex-wrap ml-auto">
            <h2 class="title">Welcome to Little brewery</h2>
            
        </div>
        -->
        <Beers :beers="beers" />
        <!--
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-4 product-box" v-for="(beer,index) in beers" :key="index">
                            <router-link :to="{ path: '/beers/'+ beer.id}">
                                <img :src="beer.image" @error="beer.image='/beers/default.png'" :alt="beer.name" class="img-fluid">
                                <h5><span v-html="beer.name"></span>
                                    <span class="small-text text-muted float-right">{{beer.price}} €</span>
                                </h5>
                                <button class="col-md-4 btn btn-sm btn-primary float-right">Acheter</button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        -->
    </div>
</template>

<script>
//import axios from 'axios'
import Beers from "./Beers";
import {axiosGet} from '@/api/api';
import Banner from "./Banner.vue";

    export default {
        components: {
            Banner,
            Beers
        },
        data(){
            return {
                beers : []
            }
        },
        mounted(){
            /*
            axios.get("http://localhost:8000/api/beers/").then(response => {
                this.beers = response.data;
                })
            */
           axiosGet("/beers").then(data => {
               this.beers = data;
                console.log(data);
           })
            
        }      
        
    }
</script>

<style scoped>
    .small-text{
        font-size: 14px;
    }

    .product-box{
        border: 1px solid #cccccc;
    }

    .hero-section {
        height: 30vh;
        background: #ababab;
        align-items: center;
        margin-bottom: 20px;
        margin-top: -20px;
    }

    .title {
        font-size: 60px;
        color: #ffffff;
    }
</style>
