<template>
        <div class="row">
            <div class="col-md-4 product-box d-flex align-content-center justify-content-center flex-wrap big-text">
                <a href='/Admin/Orders'>Orders ({{orders.length}})</a>
            </div>
            <hr>
            <div class="col-md-4 product-box d-flex align-content-center justify-content-center flex-wrap big-text">
                <a href='/Admin/Products'>Products ({{products.length}})</a>
            </div>
            <div class="col-md-4 product-box d-flex align-content-center justify-content-center flex-wrap big-text">
                <a href='/Admin/Users'>Users ({{users.length}})</a>
            </div>
        </div>
</template>

<script>
import {axiosGet, axiosGetPrivate} from '@/api/api';
    export default {
        data() {
            return {
                user : null,
                orders : [],
                products : [],
                users : []
            }
        },
        beforeMount() {
        this.user = JSON.parse(localStorage.getItem('brewery.user'))
        this.token = localStorage.getItem('brewery.jwt');
        
    },
        mounted() {
            
            axiosGetPrivate(`/users`, this.token)
                .then(data => {
                    this.users = data;
                    });
            axiosGet('/beers').then(data => {
                this.products = data;
            });

            axiosGetPrivate(`/orders`, this.token)
                .then(data => {
                    this.orders = data;
                    });
        }
    }
</script>

<style scoped>
.big-text { font-size: 28px; }
.product-box { border: 1px solid #cccccc; padding: 10px 15px; height: 20vh }
</style>