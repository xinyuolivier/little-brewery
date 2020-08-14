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
    export default {
        data() {
            return {
                user : null,
                orders : [],
                products : [],
                users : []
            }
        }
    }
</script>

<style scoped>
.big-text { font-size: 28px; }
.product-box { border: 1px solid #cccccc; padding: 10px 15px; height: 20vh }
</style>