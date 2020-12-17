<template>
  <h3>{{ finalValue }}</h3>
  <p>We do more...</p>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['finalValue']),
    // counter() {
    //   return this.$store.getters.finalValue;
    // },
  },
};
</script>
<style></style>
