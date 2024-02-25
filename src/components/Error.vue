<script setup>
const props = defineProps({
  text: String,
});
</script>
<template>
  <!-- error fetch -->
  <v-alert type="error" icon="mdi-alert-circle-outline">
    <!-- text -->
    {{ props.text }}
  </v-alert>
</template>
<style lang="scss" scoped></style>
