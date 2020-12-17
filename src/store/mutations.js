export default {
  // Auth related
  setAuth(state, payload) {
    state.isLoggedIn = payload.isAuth;
  },
};
