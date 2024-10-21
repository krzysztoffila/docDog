<template>
  <div
    v-if="user"
    class="user-dashboard-container flex flex-col md:flex-row justify-center items-start p-8"
    data-theme="light"
  >
    <div
      class="user-dashboard-container__left flex flex-col items-center w-full md:w-2/5 mb-8 md:mb-0 md:mr-8 p-8"
    >
      <div class="flex justify-center items-center h-64 mb-8">
        <img :src="userImageUrl" alt="Avatar" class="w-24 rounded-xl" />
      </div>
      <TheCalendar />
    </div>
    <div class="user-dashboard-container__right w-full md:w-3/5 p-8">
      <div class="mb-8">
        <PersonalInformation />
      </div>
      <div class="mb-8">
        <AppointmentList />
      </div>
      <div>
        <router-link to="/registervisit">
          <base-button class="btn-info">Add Appointment</base-button>
        </router-link>
      </div>
    </div>
  </div>
  <div v-else class="loading-message">Loading...</div>
</template>

<script>
import { mapGetters } from "vuex";
import PersonalInformation from "./PersonalInformation.vue";
import AppointmentList from "./AppointmentList.vue";
import TheCalendar from "./TheCalendar.vue";
import BaseButton from "@/components/layout/BaseButton.vue";

export default {
  components: {
    BaseButton,
    PersonalInformation,
    AppointmentList,
    TheCalendar,
  },
  computed: {
    ...mapGetters("User", ["user"]),
    userImageUrl() {
      return "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";
    },
  },
};
</script>

<style scoped>
</style>