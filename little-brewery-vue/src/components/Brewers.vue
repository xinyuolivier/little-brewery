<template>
    <div class="container bcontent"> 
        <div class="row">   
            <div class="col-md-6 product-box p-3" v-for="(brewer,index) in brewers" :key="index">
                <router-link :to="{ path: '/brewers/'+ brewer.id}">
                    <div class="row no-gutters">
                        <div class="col-sm-5">
                            <img :src="brewer.profile" @error="brewer.profile='/brewers/default.jpg'" :alt="brewer.name" class="img-fluid">
                        </div>
                        <div class="col-sm-7">
                            <div class="card-body">
                                <h5 class="card-title">{{ brewer.name }}</h5>
                                
                                <p class="card-text">{{ brewer.description }}</p>
                                <a href="#" class="btn btn-primary">Discover</a>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import {axiosGet} from '@/api/api';

export default {
    data(){
        return {
            brewers : null,
        }
    },
    beforeMount(){
        
        
        axiosGet("/breweries").then(data => {
               this.brewers = data;
               console.log(data);
           })

    }
}
</script>

<style scoped>

</style>