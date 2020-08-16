<template>
        <div>
            <table class="table table-responsive table-striped">
                <thead>
                    <tr>
                        <td></td>
                        <td>Product</td>
                        <td>Quantity</td>
                        <td>Cost</td>
                        <td>Delivery Address</td>
                        <td>is Delivered?</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(order,index) in orders" :key="index">
                        <td>{{index+1}}</td>
                        <td v-html="order.beer.name"></td>
                        <td>{{order.quantity}}</td>
                        <td>{{order.quantity * order.beer.price}}</td>
                        <td>{{order.created_at}}</td>
                        <td>{{order.delivered == 1? "Yes" : "No"}}</td>
                        <td v-if="order.delivered == 0"><button class="btn btn-success" @click="deliver(index)">Deliver</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
</template>

<script>
import { axiosGetPrivate, axiosPatch} from '@/api/api';

export default {
    data() {
        return {
            orders : []
        }
    },
    beforeMount(){
       
        this.user = JSON.parse(localStorage.getItem('brewery.user'))
        this.token = localStorage.getItem('brewery.jwt');
        
        axiosGetPrivate(`/orders`, this.token)
                .then(data => {
                    this.orders = data;
                    console.log(data)
                    });
    },
    methods: {
        deliver(index) {
            let order = this.orders[index];
            axiosPatch(`/orders/${order.id}/deliver`, this.token)
                .then(data => {
                    console.log(data);
                    this.orders[index].delivered = 1;
                    this.$forceUpdate();
                })
        }
    }
}
</script>