import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import ConfirmationService from 'primevue/confirmationservice';

import App from './App.vue';
import router from './router';
import localStoragePlugin from '@/plugins/pinia/LocalStoragePlugin';

const app = createApp(App);

const pinia = createPinia();

function ourPlugin(){
    return {
        secret: 'Dummy'
    };
}

pinia.use(ourPlugin);
pinia.use(localStoragePlugin);
app.use(pinia);
app.use(router);
app.use(ConfirmationService);

app.mount('#app');
