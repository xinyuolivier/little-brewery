<template>
    <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
        <div class="container">
            <router-link :to="{name: 'home'}" class="navbar-brand">
                <img src="/logo.jpg" class="img-fluid logo">
            </router-link>
            <router-link :to="{name: 'home'}" class="navbar-brand"><h1>Little Brewery</h1></router-link>
            
            
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- Left Side Of Navbar -->
                <ul class="navbar-nav mr-auto"></ul>
                <!-- Right Side Of Navbar -->
                <ul class="navbar-nav ml-auto">
                    <router-link :to="{ name: 'login' }" class="nav-link" v-if="!isLoggedIn">Login</router-link>
                    <router-link :to="{ name: 'register' }" class="nav-link" v-if="!isLoggedIn">Register</router-link>
                    <span v-if="isLoggedIn">
                        <router-link :to="{ name: 'userboard' }" class="nav-link" v-if="user_type != 'admin'"> Hi, {{name}}</router-link>
                        <router-link :to="{ name: 'admin' }" class="nav-link" v-if="user_type == 'admin'"> Hi, {{name}}</router-link>
                    </span>
                    <li class="nav-link" v-if="isLoggedIn" @click="logout"> Logout</li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
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
      change(){
          this.isLoggedIn = localStorage.getItem('brewery.jwt') != null;
          this.setDefaults();
      },
      logout(){
          localStorage.removeItem('brewery.jwt');
          localStorage.removeItem('brewery.user');
          this.change();
          this.$route.push('/');
      }
  }
}
</script>

<style scoped>
    .logo {
        width: 80px;
    }

    
</style>