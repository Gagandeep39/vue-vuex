<template>
  <h3>{{ counter }}</h3>
</template>
<script>
export default {
  computed: {
    counter() {
      // Updates counter as soon as its value changes
      return this.$store.state.counter;
    },
  },
};
</script>
<style lang=""></style>
