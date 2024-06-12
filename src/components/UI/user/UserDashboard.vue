<template>
  <div
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
          <base-button class="btn-info">Add Appointment </base-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import PersonalInformation from "./PersonalInformation.vue";
import AppointmentList from "./appointments/AppointmentList.vue";
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
    userImageUrl() {
      return "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg";
    },
  },
};
</script>

<style scoped>
</style>