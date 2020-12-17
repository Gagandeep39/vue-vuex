<template>
  <button @click="increment()">Add 1</button>
  <button @click="incrementBy({ value: 5 })">Add 5</button>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    // increment() {
    //   // this.$store.commit('increment');
    //   // this.$store.dispatch('increment');
    //   this.$store.dispatch({
    //     type: 'increment',
    //   });
    // },
    ...mapActions('numbers', ['increment', 'incrementBy']),
  },
};
</script>
<style scoped></style>
