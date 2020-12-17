import counterActions from './actions';
import counterMutations from './mutations';
import counterGetters from './getters';

export default {
  namespaced: true,
  state() {
    return {
      counter: 0,
    };
  },
  mutations: counterMutations,
  getters: counterGetters,
  actions: counterActions,
};
