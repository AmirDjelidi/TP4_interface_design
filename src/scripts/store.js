import { createStore } from 'vuex';

export default createStore({
    state: {
        user: null
    },
    mutations: {

        setUser(state, user) {
            console.log("User has been set: ", user);
            state.user = user;
        },
        logout(state) {
            state.user = null;
        }
    },
    getters: {

        getUser(state) {
            return state.user;
        },
        isLoggedIn: state => !!state.user
    }
});
