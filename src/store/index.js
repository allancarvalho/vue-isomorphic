import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const initialState =  {
  count: 0
}
const inBrowser = typeof window !== 'undefined'

const state = inBrowser && window.__INITIAL_STATE__ ? window.__INITIAL_STATE__ : initialState;
const store = new Vuex.Store({
  state,
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
      increment (context) {
        context.commit('increment')
      }
  }
});

export default store;