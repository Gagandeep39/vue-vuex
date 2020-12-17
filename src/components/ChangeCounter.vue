<template>
  <button @click="increment">Add 1</button>
</template>
<script>
export default {
  methods: {
    increment() {
      this.$store.commit('increment');
    },
  },
};
</script>
<style scoped></style>
