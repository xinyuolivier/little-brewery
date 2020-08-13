import Vue from "vue";
import VueRouter from 'vue-router'
import App from "./App.vue";
import '@/assets/css/tailwind.css';

Vue.config.productionTip = false;
Vue.use(VueRouter)

    import App from './App'
    import Home from './Home'
    import Login from './components/Login'
    import Register from './components/Register'
    import SingleProduct from './components/SingleProduct'
    import Checkout from './components/Checkout'
    import Confirmation from './components/Confirmation'
    import UserBoard from './components/UserBoard'
    import Admin from './components/Admin'
    import store from "./store"

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
                meta: {
                    requiresAuth: true,
                    is_user: true
                }
            },
            {
                path: '/admin/:page',
                name: 'admin-pages',
                component: Admin,
                meta: {
                    requiresAuth: true,
                    role: admin
                }
            },
            {
                path: '/admin',
                name: 'admin',
                component: Admin,
                meta: {
                    requiresAuth: true,
                    role: admin
                }
            },
        ],
    })

    router.beforeEach((to, from, next) => {
        if (to.matched.some(record => record.meta.requiresAuth)) {
            if (localStorage.getItem('bigStore.jwt') == null) {
                next({
                    path: '/login',
                    params: { nextUrl: to.fullPath }
                })
            } else {
                let user = JSON.parse(localStorage.getItem('bigStore.user'))
                if (to.matched.some(record => record.meta.is_admin)) {
                    if (user.is_admin == 1) {
                        next()
                    }
                    else {
                        next({ name: 'userboard' })
                    }
                }
                else if (to.matched.some(record => record.meta.is_user)) {
                    if (user.is_admin == 0) {
                        next()
                    }
                    else {
                        next({ name: 'admin' })
                    }
                }
                next()
            }
        } else {
            next()
        }
    })


new Vue({
  render: h => h(App)
}).$mount("#app");

