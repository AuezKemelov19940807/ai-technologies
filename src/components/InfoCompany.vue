<script setup>
import { computed, onMounted } from "vue";
// store
import { useStore } from "vuex";
//components
import CurrentDate from "./CurrentDate.vue";
const store = useStore();

const company = store.state.company;
</script>
<template>
  <v-card-text>
    <v-list>
      <v-list-item two-line>
        <v-list-item-content>
          <!-- name company -->
          <v-list-item-subtitle>
            <v-icon>mdi-domain</v-icon>
            Название компаний:
          </v-list-item-subtitle>
          <v-list-item-title class="info">
            {{ company.company.name }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line>
        <!-- select city -->
        <v-list-item-content>
          <v-list-item-subtitle>
            <v-icon>mdi-map-marker</v-icon>
            Выбранный город:
          </v-list-item-subtitle>
          <v-list-item-title class="subtitle">
            {{ store.state.cities.selectedCity.name }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <!-- current date -->
      <CurrentDate />
      <v-list-item two-line>
        <!-- total number of goods -->
        <v-list-item-content>
          <v-list-item-subtitle>
            <v-icon>mdi-package-variant</v-icon>
            Общее количество товаров:
          </v-list-item-subtitle>
          <v-list-item-title class="subtitle">
            {{ company.company.status.totalProducts }} шт.
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line>
        <!-- Available products -->
        <v-list-item-content>
          <v-list-item-subtitle>
            <v-icon>mdi-cart-arrow-down</v-icon>
            Доступных товаров:
          </v-list-item-subtitle>
          <v-list-item-title class="subtitle">
            {{ company.company.status.availableProducts }} шт.
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line>
        <!-- Products out of stock -->
        <v-list-item-content>
          <v-list-item-subtitle>
            <v-icon>mdi-cart-remove</v-icon>
            Товаров без наличия:
          </v-list-item-subtitle>
          <v-list-item-title class="subtitle">
            {{ company.company.status.nonAvailableProducts }} шт.
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card-text>
</template>
<style lang="scss" scoped>
.v-list-item {
  margin: 0px 0px 10px 0px;
  border-bottom: 1px solid #e0e0e0; /* Горизонтальная линия */
  &:last-child {
    border: none;
  }
}

.v-list-item-subtitle {
  margin: 0px 0px 7px 0px;
}
.v-list-item-title {
  font-weight: 500;
}
</style>
