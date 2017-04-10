import Vue from 'vue'
import foo from '../components/foo.vue';
import bar from '../components/bar.vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: foo },
    { path: '/foo', component: foo },
    { path: '/bar', component: bar }
  ]
});

export default router