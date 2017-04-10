import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './routes';
import Main from './components/main.vue';

const app = new Vue({
    router,
    ...Main
});
export { app, router };
