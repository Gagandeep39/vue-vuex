export default {
  increment(state) {
    state.counter = state.counter + 1;
  },
  incrementBy(state, payload) {
    state.counter = state.counter + payload.value;
  },
};
