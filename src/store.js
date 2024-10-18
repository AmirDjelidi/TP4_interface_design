import { createStore } from 'vuex';

export default createStore({
    state: {
        user: null
    },
    mutations: {

        setUser(state, user) {
            console.log("User has been set: ", user);
            state.user = user;
        }
    },
    getters: {

        getUser(state) {
            return state.user;
        }
    }
});
