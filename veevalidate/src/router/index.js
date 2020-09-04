import Vue from 'vue'
import Router from 'vue-router'
import Validate from '@/components/Validate'

Vue.use(Router)

const routes = [
    {
        path: '/validate',
        name: 'validate',
        component: Validate
    }
];

const router = new Router({
    routes
});

export default router;