<script setup>
import { onMounted } from "vue";
// store
import { useStore } from "vuex";
//components
import Loading from "./Loading.vue";
import Error from "./Error.vue";
const store = useStore();
// handle select city
const dispatchSelectedCity = (code) => {
  store.commit("setSelectedCity", code);
};

onMounted(async () => {
  await store.dispatch("fetchCities");
});
</script>
<template>
  <v-card v-if="store.state.cities.citiesLoaded">
    <!-- list cities -->
    <v-card-title>Список городов</v-card-title>
    <v-card-text>
      <v-list>
        <v-list-item
          v-for="city in store.state.cities.cities.cities"
          :key="city.code"
          @click="dispatchSelectedCity(city.code)"
        >
          <!-- name -->
          <v-list-item-title>{{ city.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
  <!-- error fetch -->
  <Error
    v-else-if="store.state.cities.citiesError"
    :text="store.state.cities.citiesError"
  />
  <!-- loading fetch -->
  <Loading v-else />
</template>
<style lang="scss" scoped>
.v-list-item {
  border-bottom: 1px solid #e0e0e0; /* Горизонтальная линия */
  &:last-child {
    border: none;
  }
}
</style>
