<template>
  <base-container title="Vuex">
    <the-counter></the-counter>
    <favourite-value />
    <button @click="increment">Add 10</button> <br />
    <change-counter></change-counter>
  </base-container>
  <!--  -->
  <base-container title="Auth">
    <user-auth />
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavouriteValue from './components/FavouriteValue.vue';
import TheCounter from './components/TheCounter.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavouriteValue,
    UserAuth,
  },
  methods: {
    increment() {
      // this.$store.commit('incrementBy', { value: 10 });
      // OR
      this.$store.dispatch({
        type: 'incrementBy',
        value: 10,
      });
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
