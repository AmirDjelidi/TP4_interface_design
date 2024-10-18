import { createApp } from 'vue'
import App from './App.vue'
import store from './scripts/store';
import index from './scripts';  // Import du index

createApp(App).use(store).use(index).mount('#app')
