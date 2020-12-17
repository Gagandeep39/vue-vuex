export default {
  finalValue(state, getter, rootState, rootGetters) {
    // getter - Provides value of other getter
    // state - Values of state
    console.log(getter);
    console.log(state);
    console.log(rootState);
    console.log(rootGetters);
    return state.counter;
  },
};
