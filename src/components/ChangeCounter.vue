<template>
  <button @click="increment">Add 1</button>
</template>
<script>
export default {
  methods: {
    increment() {
      // this.$store.commit('increment');
      // this.$store.dispatch('increment');
      this.$store.dispatch({
        type: 'increment',
      });
    },
  },
};
</script>
<style scoped></style>
