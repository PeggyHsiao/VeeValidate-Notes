import Vue from 'vue'
import Router from 'vue-router'
import VeeValidate from '@/components/VeeValidate'

Vue.use(Router)

const routes = [
    {
        path: '/veevalidate',
        name: 'veevalidate',
        component: VeeValidate
    }
];

const router = new Router({
    routes
});

export default router;