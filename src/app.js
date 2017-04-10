import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './routes';
import Main from './components/main.vue';

export const app = new Vue({
    router,
    render: (h) => h(Main)
});