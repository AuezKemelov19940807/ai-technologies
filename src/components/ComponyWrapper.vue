<script setup>
//store
import { useStore } from "vuex";
// components
import Error from "./Error.vue";
import Loading from "./Loading.vue";
const store = useStore();
</script>
<template>
  <!-- slot -->
  <v-row justify="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="elevation-3" v-if="store.state.company.companyLoaded">
        <slot />
      </v-card>
      <!-- error fetch -->
      <Error
        v-else-if="store.state.company.companyError"
        :text="store.state.company.companyError"
      />
      <!-- loading fetch -->
      <Loading v-else />
    </v-col>
  </v-row>
</template>
<style lang="scss" scoped></style>
