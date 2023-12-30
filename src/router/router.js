
import { createWebHistory, createRouter } from 'vue-router';
import Home from '../components/Home.vue';
import PageNotFound from "../components/PageNotFound.vue";

const routes = [{
        path: "/",
        component: Home,
    },
    {
        path: '/:catchAll(.*)*',
        name: "PageNotFound",
        component: PageNotFound,
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    },
    linkActiveClass: 'vue-school-active-link',

});

export default router;