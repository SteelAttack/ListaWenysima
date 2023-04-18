import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/shared/pages/HomePage.vue';
import AboutPage from '@/shared/pages/AboutPage.vue';

import { movieRoute } from '@/movies/router';

const router = createRouter({
    history: createWebHistory( import.meta.env.BASE_URL ),
    routes: [
        { path: '/', name: 'home', component: HomePage },
        { path: '/about', name: 'about', component: AboutPage },
        {
            ...movieRoute,
            path: '/movies'
        },
        { path: '/:pathMatch(.*)*', redirect: () => ({ name: 'home' }) }
    ]
});

export default router;
