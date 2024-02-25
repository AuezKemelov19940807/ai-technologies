<script setup>
import { onMounted } from "vue";
// store
import { useStore } from "vuex";

//components
import UserProfile from "./UserProfile.vue";
import Cities from "./Cities.vue";
import Button from "./Button.vue";
import InfoCompany from "./InfoCompany.vue";
import CompanyWrapper from "./ComponyWrapper.vue";

const store = useStore();

onMounted(async () => {
  await store.dispatch("fetchCompanyData");
});
</script>
<template>
  <!-- wrapper slot -->
  <CompanyWrapper>
    <!-- profile -->
    <UserProfile />
    <!-- information about company -->
    <InfoCompany />
    <!-- button open dialog -->
    <Button />
  </CompanyWrapper>
  <!-- modal -->
  <Dialog>
    <!-- list cities -->
    <Cities />
  </Dialog>
</template>

<style lang="scss" scoped>
.headline {
  font-size: 24px;
}
</style>
