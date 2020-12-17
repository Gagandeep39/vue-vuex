<template>
  <base-container title="Vuex">
    <h3>{{ counter }}</h3>
    <button @click="increment">Add 1</button></base-container
  >
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';

export default {
  components: {
    BaseContainer,
  },
  methods: {
    increment() {
      this.$store.state.counter++;
    },
  },
  computed: {
    counter() {
      // Updates counter as soon as its value changes
      return this.$store.state.counter;
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
