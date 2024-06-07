<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-blue-300 p-4"
  >
    <h2 class="text-3xl font-bold mb-8 text-blue-800">REGISTER VISIT</h2>
    <div
      class="user-dashboard-container flex flex-col items-center md:flex-row md:space-x-8 p-8 shadow-lg rounded-lg w-full max-w-4xl bg-white"
    >
      <div class="user-dashboard-left mb-4 md:mb-0 flex-1">
        <TheCalendar class="text-blue-800" />
      </div>
      <div class="user-dashboard-right mb-4 md:mb-0 flex-1">
        <DoctorsComponent class="text-blue-800" />
      </div>
    </div>
    <div class="mt-6">
      <button class="btn btn-info">Add Visit</button>
    </div>
  </div>
</template>

<script>
import DoctorsComponent from "../../doctor/DoctorsComponent.vue";
import TheCalendar from "../TheCalendar.vue";

export default {
  components: { TheCalendar, DoctorsComponent },
};
</script>

<style>
</style>
