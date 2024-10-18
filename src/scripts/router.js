import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import ConversationsIndexPage from '../components/ConversationsIndexPage.vue';  // Nouveau composant

const routes = [
    { path: '/', component: HomePage },
    { path: '/conversations', component: ConversationsIndexPage }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
