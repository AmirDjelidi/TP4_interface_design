import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import ConversationsIndexPage from '../components/ConversationsIndexPage.vue';
import ConversationShowPage from '../components/ConversationShowPage.vue';
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
    },
    {
        path: '/conversations/:id',
        component: ConversationShowPage,
        props: true,
        beforeEnter: (to, from, next) => {

            if (!store.state.user) {

                next('/');
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
