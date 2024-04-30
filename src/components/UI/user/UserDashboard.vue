<template>
  <div
    class="user-dashboard-container flex flex-col md:flex-row justify-center items-start p-8"
    data-theme="light"
  >
    <div
      class="user-dashboard-container__left w-full md:w-2/5 mb-8 md:mb-0 md:mr-8 p-8"
    >
      <div class="flex justify-center items-center h-64 mb-8">
        <img :src="userImageUrl" alt="Avatar" class="rounded-full h-24 w-24" />
      </div>
      <!-- CALENDAR.JS -->
      <div class="h-64 bg-black"></div>
    </div>
    <div class="user-dashboard-container__right w-full md:w-3/5 p-8">
      <div class="mb-8">
        <PersonalInformation />
      </div>
      <div class="mb-8">
        <h2 class="text-lg font-semibold mb-4">Your Appointments</h2>
        <!-- Wyświetl listę wizyt użytkownika -->
        <ul>
          <li>Appointment 1</li>
          <li>Appointment 2</li>
          <!-- Dodaj więcej wizyt, jakie użytkownik ma -->
        </ul>
      </div>
      <div>
        <button class="btn btn-primary">Add Appointment</button>
      </div>
    </div>
  </div>
</template>

<script>
import PersonalInformation from "./PersonalInformation.vue";

export default {
  components: {
    PersonalInformation,
  },
  computed: {
    userImageUrl() {
      return "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg";
    },
  },
};
</script>

