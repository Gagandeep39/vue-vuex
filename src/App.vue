<template>
  <base-container title="Vuex">
    <the-counter></the-counter>
    <button @click="increment">Add 10</button> <br />
    <change-counter></change-counter>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import TheCounter from './components/TheCounter.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
  },
  methods: {
    increment() {
      // this.$store.commit('incrementBy', { value: 10 });
      // OR
      this.$store.commit({
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
