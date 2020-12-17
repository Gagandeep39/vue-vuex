export default {
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
};
