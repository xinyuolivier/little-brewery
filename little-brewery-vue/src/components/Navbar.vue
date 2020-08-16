<template>
    <nav class="navbar navbar-expand-md navbar-light ">
        <div class="container">

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- Left Side Of Navbar -->
                <ul class="navbar-nav mr-auto">
                    <router-link :to="{name: 'brewers'}" class="navbar-brand mr-4 routes">Our BrewHouses</router-link>
                    <router-link :to="{name: 'home'}" class="navbar-brand mr-4 routes">Our Beers</router-link>
                </ul>
                <!-- Right Side Of Navbar -->
                <ul class="navbar-nav ml-auto">
                    <span v-if="isLoggedIn">
                        <router-link :to="{ name: 'userboard' }" class="navbar-brand routes" v-if="user_type != 'admin'"> AdminBoard</router-link>
                        <router-link :to="{ name: 'admin' }" class="navbar-brand routes" v-if="user_type == 'admin'"> Your Account</router-link>
                    </span>
                </ul>
            </div>
            
        </div>
    </nav>
</template>

<script>
export default {
    data(){
      return{
          name: null,
          user_type: 'buyer',
          isLoggedIn: localStorage.getItem('brewery.jwt') != null,
      }
    },
    mounted() {
        console.log('mounted');
        this.setDefaults();
    },
    methods: {
        setDefaults() {
            if(this.isLoggedIn){
                let user = JSON.parse(localStorage.getItem("brewery.user"));
                console.log(user);
                this.name = user.firstname;
                this.user_type = user.role;
            }
        },
    }
}
</script>

<style scoped>
.routes{
    font-family: Helvetica, Arial;
    text-transform: uppercase;
    font-size: 20px;
    color: #666;
}
</style>