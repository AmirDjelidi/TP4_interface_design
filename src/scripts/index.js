import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import ConversationsIndexPage from '../components/ConversationsIndexPage.vue';
import store from '../scripts/store';

const routes = [
    { path: '/', component: HomePage },
    { path: '/conversations', component: ConversationsIndexPage,
        beforeEnter: (to, from, next) => {

            if (!store.state.user) {

                next('/');
                alert("Veuillez vous connecter pour accéder à cette page");
            } else {
                next();

            }
        }
    }
];

const index = createRouter({
    history: createWebHistory(),
    routes
});

export default index;
