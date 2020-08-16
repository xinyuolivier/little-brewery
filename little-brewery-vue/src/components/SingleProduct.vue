<template>
        <div class="container">
            <div class="row">
                <div class="col-md-8 offset-md-2">

                    <img :src="product.image" @error="product.image='/bieers/default.png'" :alt="product.name" class="img-fluid">
                   
                    <h2 class="title text-uppercase" v-html="product.name"></h2>
                    <p class="text-muted font-weight-bold text-capitalize">{{product.color}}: {{product.flavor}}</p>
                    <p class="text-muted font-italic text-capitalize">{{product.packaging}}</p>
                    <p class="text-muted text-capitalize">{{product.description}}</p>
                    <h4>
                        <span class="small-text text-muted float-left">‎€ {{product.price}}</span>
                        <span class="small-text float-right">Available Quantity: {{product.units}}</span>
                    </h4>
                    <br>
                    <hr>
                    <router-link :to="{ path: '/checkout?pid='+product.id }" class="col-md-4 btn btn-sm btn-primary float-right">Buy Now</router-link>
                </div>
            </div>
        </div>
</template>

<script>

import {axiosGet} from '@/api/api';

export default {
    data(){
        return {
            product : []
        }
    },
    beforeMount(){
        let beerId = `${this.$route.params.id}`; 
        
        axiosGet("/beers/" + beerId).then(data => {
               this.product = data;
           })
    }
}
</script>

<style scoped>
    .small-text { font-size: 18px; }
    .title { font-size: 36px; }
</style>