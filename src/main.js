import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 2;
    },
    incrementBy(state, payload) {
      state.counter = state.counter + payload.value;
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
  },
});

createApp(App)
  .use(store)
  .mount('#app');
