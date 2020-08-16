<template>
        <div>
            <div class="container-fluid hero-section d-flex align-content-center justify-content-center flex-wrap ml-auto">
                <h2 class="title">All your orders</h2>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <br>
                        <div class="row">
                            <div class="col-md-4 product-box" v-for="(order,index) in orders" :key="index">
                                <img :src="order.beer.image" :alt="order.beer.name">
                                <h5><span v-html="order.beer.name"></span><br>
                                    <span class="small-text text-muted">€ {{order.beer.price}}</span>
                                </h5>
                                <hr>
                                <span class="small-text text-muted">Quantity: {{order.quantity}}
                                    <span class="float-right">{{order.delivered == 1? "shipped!" : "not shipped"}}</span>
                                </span>
                                <br><br>
                                <p><strong>Delivery address:</strong> <br>{{user.address}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>



<script>
import {axiosGetPrivate} from '@/api/api';
    export default {
        data() {
            return {
                user : null,
                orders : []
            }
        },
        beforeMount() {
            this.user = JSON.parse(localStorage.getItem('brewery.user'));
            this.token = localStorage.getItem('brewery.jwt');

            axiosGetPrivate(`/users/${this.user.id}/orders`, this.token)
                .then(data => {
                    console.log(data);
                    this.orders = data;
                    });
        }
    }
</script>

<style scoped>
    .small-text { font-size: 14px; }
    .product-box { border: 1px solid #cccccc; padding: 10px 15px; }
    .hero-section { background: #ababab; height: 20vh; align-items: center; margin-bottom: 20px; margin-top: -20px; }
    .title { font-size: 60px; color: #ffffff; }
</style>