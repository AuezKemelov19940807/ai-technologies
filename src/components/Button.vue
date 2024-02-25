<script setup>
// store
import { useStore } from "vuex";

const store = useStore();

//toggle city dialog
const toggleCityDialog = () => {
  store.commit("setCityDialog", !store.state.cities.cityDialog);
};
</script>
<template>
  <!-- button -->
  <v-card-actions>
    <v-btn color="primary" @click="toggleCityDialog">Выбрать город</v-btn>
  </v-card-actions>
</template>
<style lang="scss" scoped></style>
