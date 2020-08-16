<template>
  <div>
    <Header />
    <Navbar />
    <main class=" bg-light">
        <router-view @loggedIn="change"></router-view>
    </main>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Navbar from "./components/Navbar.vue";

export default {
  name: 'App',
  components: {
      Header,
      Navbar
  },
  data(){
      return{
          
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
              // let user = JSON.parse(localStorage.getItem("brewery.user"));
              //console.log(user);
              //this.name = user.firstname;
              //this.user_type = user.role;
          }
      },
      change(){
          this.isLoggedIn = localStorage.getItem('brewery.jwt') != null;
          this.setDefaults();
      },
  }
}
/*
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
        console.log('isLoggedIn: ' + this.isLoggedIn);
        console.log('jwt: ' + localStorage.getItem('brewery.jwt'));
        console.log ('user_type: ' + this.user_type);
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
*/
</script>

