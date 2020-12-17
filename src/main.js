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
      state.counter = state.counter + 1;
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
  },
});

createApp(App)
  .use(store)
  .mount('#app');
