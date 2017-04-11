import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './routes';
import Main from './components/main.vue';
import Vuex from 'vuex';
import store from './store';

const app = new Vue({
    router,
    store,
    render: (h) => h(Main)
});

export { app, router, store };