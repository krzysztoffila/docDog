<template>
  <div
    class="user-dashboard-container flex flex-col md:flex-row justify-center items-start p-8"
    data-theme="light"
  >
    <div
      class="user-dashboard-container__left w-full md:w-2/5 mb-8 md:mb-0 md:mr-8 p-8"
    >
      <div class="flex justify-center items-center h-64 mb-8">
        <img :src="userImageUrl" alt="Avatar" class="w-24 rounded-xl" />
      </div>
      <!-- CALENDAR.JS -->
      <TheCalendar />
      <!-- <div class="h-64 bg-primary"></div> -->
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
          <button class="btn btn-primary">Add Appointment</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import PersonalInformation from "./PersonalInformation.vue";
import AppointmentList from "./appointments/AppointmentList.vue";
import TheCalendar from "./TheCalendar.vue";

export default {
  components: {
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
.user-dashboard-container__left {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>