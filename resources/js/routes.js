import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/js/components/Home';
import Login from '@/js/components/pages/login';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path:'/',
            name:'login',
            component:Login
        },
        {
            path:'/home',
            name:'home',
            component:Home
        }
    ]
});

export default router;