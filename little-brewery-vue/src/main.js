import Vue from "vue";
import VueRouter from 'vue-router';
import App from "./App.vue";
import '@/assets/css/tailwind.css';
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;
Vue.use(VueRouter);

    import Home from './Home';
    import Login from './components/Login';
    import Register from './components/Register';
    import SingleProduct from './components/SingleProduct';
    import Checkout from './components/Checkout';
    import Confirmation from './components/Confirmation';
    import UserBoard from './components/UserBoard';
    import Admin from './components/Admin';
    import store from "./store";

    const router = new VueRouter({
        mode: 'history',
        routes: [
            {
                path: '/',
                name: 'home',
                component: Home
            },
            {
                path: '/login',
                name: 'login',
                component: Login
            },
            {
                path: '/register',
                name: 'register',
                component: Register
            },
            {
                path: '/beers/:id',
                name: 'single-products',
                component: SingleProduct
            },
            {
                path: '/confirmation',
                name: 'confirmation',
                component: Confirmation
            },
            {
                path: '/checkout',
                name: 'checkout',
                component: Checkout,
                props: (route) => ({ pid: route.query.pid })
            },
            {
                path: '/dashboard',
                name: 'userboard',
                component: UserBoard,
                
            },
            {
                path: '/admin/:page',
                name: 'admin-pages',
                component: Admin,
               
            },
            {
                path: '/admin',
                name: 'admin',
                component: Admin,
               
            },
        ],
    })

new Vue({
    store,
    router,
  render: h => h(App)
}).$mount("#app");

