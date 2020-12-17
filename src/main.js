import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0,
      isLoggedIn: false,
    };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 1;
    },
    incrementBy(state, payload) {
      state.counter = state.counter + payload.value;
    },
    // Auth related
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    },
  },
  getters: {
    finalValue(state, getter) {
      // getter - Provides value of other getter
      // state - Values of state
      console.log(getter);
      console.log(state);
      return state.counter;
    },
    // Auth
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    },
  },
  actions: {
    increment(context) {
      // contxt - Provides access to do in store, mutation
      setTimeout(() => {
        context.commit('increment');
      }, 1000);
    },
    // Action with payload
    incrementBy(context, payload) {
      console.log(context);
      console.log(payload);
      setTimeout(() => {
        context.commit('incrementBy', payload);
      }, 1000);
    },

    // Auth related actions
    login(context) {
      context.commit('setAuth', { isAuth: true });
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false });
    },
  },
});

createApp(App)
  .use(store)
  .mount('#app');
