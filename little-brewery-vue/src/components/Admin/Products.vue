<template>
        <div>
            <table class="table table-responsive table-striped">
                <thead>
                    <tr>
                        <td></td>
                        <td>Product</td>
                        <td>Units</td>
                        <td>Price</td>
                        <td>Description</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(product,index) in products" :key="index" @dblclick="editingItem = product">
                        <td>{{index+1}}</td>
                        <td v-html="product.name"></td>
                        <td v-html="product.quantity">{{product.quantity}}</td>
                        <td v-html="product.price">{{product.price}}</td>
                        <td v-html="product.description">{{product.description}}</td>
                    </tr>
                </tbody>
            </table>
            <modal @close="endEditing" :product="editingItem" v-show="editingItem != null"></modal>
            <modal @close="addProduct"  :product="addingProduct" v-show="addingProduct != null"></modal>
            <br>
            <button class="btn btn-primary" @click="newProduct">Add New Product</button>
        </div>
</template>

<script>
import {axiosGet, axiosPut, axiosPostPrivate} from '@/api/api';
    import Modal from './ProductModal'

    export default {
        data() {
            return {
                products: [],
                editingItem: null,
                addingProduct: null
            }
        },
        components: {Modal},
        beforeMount() {

            this.token = localStorage.getItem('brewery.jwt');
            axiosGet("/beers").then(data => {
               this.products = data;
                console.log(data);
           });
        },
        methods: {
            newProduct() {
                this.addingProduct = {
                    name: null,
                    units: null,
                    price: null,
                    image: null,
                    description: null,
                }
            },
            endEditing(product) {
                this.editingItem = null
//'name', 'brewery_id', 'description', 'flavor','color','packaging', 'image', 'price', 'quantity',

                let index = this.products.indexOf(product)
                let body = {
                    name: this.product.name,
                    //brewery_id:,
                    description: product.description,
                    flavor: product.flavor,
                    color: product.color,
                    packaging: product.packaging,
                    image: product.image,
                    price: product.price,
                    quantity: product.quantity,

                };


                axiosPut(`/beers/${product.id}`, body, this.token).then(response => {
                    console.log(response);
                    this.products[index] = product;
                })

            },
            addProduct(product) {
                this.addingProduct = null

                let body = {
                    name: this.product.name,
                    //brewery_id:,
                    description: product.description,
                    flavor: product.flavor,
                    color: product.color,
                    packaging: product.packaging,
                    image: product.image,
                    price: product.price,
                    quantity: product.quantity,

                };

                
                axiosPostPrivate(`/beers`, body, this.token).then(response => {
                    console.log(response);
                    this.products.push(product);
                });
                
            }
        }
    }
</script>
