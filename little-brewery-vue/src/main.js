import Vue from "vue";
import VueRouter from 'vue-router';
import store from "./store";



import App from "./App.vue";
import Home from './components/Home';
import Brewery from './components/Brewery';
import Brewers from './components/Brewers';
import Login from './components/Login';
import Register from './components/Register';
import SingleProduct from './components/SingleProduct';
import Checkout from './components/Checkout';
import Confirmation from './components/Confirmation';
import UserBoard from './components/UserBoard';
import Admin from './components/Admin';

//import '@/assets/css/tailwind.css';
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.use(VueRouter);
//Vue.config.productionTip = false;
//Vue.use(VueRouter, VueAxios, axios);
//Vue.prototype.$http = axios;


    

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/brewers/:id',
            name: 'brewery',
            component: Brewery
        },
        {
            path: '/brewers',
            name: 'brewers',
            component: Brewers
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
            meta: {
                requiresAuth: true,
                is_admin: true
            }
            
        },
        {
            path: '/admin',
            name: 'admin',
            component: Admin,
            meta: {
                requiresAuth: true,
                is_admin: true
            }
        },
    ],
})


router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if(localStorage.getItem('brewery.jwt') == null) {
            next({
                path: '/login',
                params: {nextUrl: to.fullPath}
            });
        } else {
            let user = JSON.parse(localStorage.getItem('brewery.user'));
            if (to.matched.some(record => record.meta.is_admin)){
                if (user.role == 'admin'){
                    next();
                } else {
                    next ({name: 'userboard'});
                }
            } else if (to.matched.some(record => record.meta.is_user)) {
                if (user.role != 'admin'){
                    next();
                } else {
                    next( { name: 'admin'});
                }
            }
            next();
        }
    } else {
        next();
    }
})

new Vue({
    store,
    router,
  render: h => h(App)
}).$mount("#app");

