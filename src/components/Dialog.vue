<script setup>
// store
import { useStore } from "vuex";
const store = useStore();
</script>
<template>
  <!-- modal -->
  <v-dialog v-model="store.state.cities.cityDialog">
    <slot />
  </v-dialog>
</template>
<style lang="scss" scoped>
.v-dialog {
  max-width: 600px;
}
</style>
