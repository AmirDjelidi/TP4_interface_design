import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import AboutPage from '../components/AboutPage.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage }  // Exemple de route vers une page "About"
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
