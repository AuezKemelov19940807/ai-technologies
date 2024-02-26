<script setup>
// store
import { useStore } from "vuex";
import { ref, onMounted } from "vue";
const store = useStore();
// date-fns
import { format } from "date-fns";

const formattedDate = ref("");

onMounted(() => {
  // date
  const date = store.state.company.company.status.today;
  formattedDate.value = formatDate(date);
});

const formatDate = (dateString) => {
  const date = new Date(dateString);

  return format(date, "dd.MM.yyyy", { timeZone: "Asia/Almaty" });
};
</script>
<template>
  <v-list-item two-line>
    <!-- current date -->
    <v-list-item-content>
      <v-list-item-subtitle>
        <v-icon>mdi-calendar-today</v-icon>
        Сегодняшняя дата:
      </v-list-item-subtitle>
      <v-list-item-title class="subtitle">
        {{ formattedDate }}
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>
<style lang="scss" scoped></style>
