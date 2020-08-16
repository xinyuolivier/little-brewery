<template>
    <div class="bg-image">
        <div class="container pt-5">
            
            <div class="row pt-5">
                <aside class="col-md-3 ">
                    <BrewerThundernail :brewer= "brewer"/>
                </aside>
                <section class="col-md-9 ">
                    <div class="p-2 mt-4 mb-3 bg-white">
                        <h3>Who are we?</h3>
                        <p>{{ brewer.description }}</p>
                    </div>

                    <div class="p-2 mt-4 mb-3 bg-white">
                        <h3>Buy our Beers</h3>
                        <div class="mt-2">
                            <Beers :beers="beers" />
                        </div>
                        
                    </div>
                    
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import {axiosGet} from '@/api/api';
import BrewerThundernail from "./Brewery/BrewerThundernail";
import Beers from "./Beers";

export default {
    components:{
        BrewerThundernail,
        Beers,
    },
     data(){
        return {
            brewer : null,
            beers: null,
        }
    },
    beforeMount(){
        let brewerId = `${this.$route.params.id}`; 
        
        axiosGet("/breweries/" + brewerId).then(data => {
               this.brewer = data;
               console.log(data);
           })

        axiosGet("/breweries/" + brewerId + '/beers').then(data => {
               this.beers = data;
               console.log(data);
           })
    }
    
}
</script>

<style scoped>
    .bg-image {
        background: url(/brewers/banner.jpg) no-repeat;
        background-repeat: no-repeat;
        background-size: 100% 25%;
        padding: 0 !important;
        margin: 0 auto !important;
    }
    
</style>