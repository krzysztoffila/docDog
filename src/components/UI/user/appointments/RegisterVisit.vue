<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-blue-300 p-4"
  >
    <h2 class="text-3xl font-bold mb-8 text-blue-800">REGISTER VISIT</h2>
    <div
      class="user-dashboard-container flex flex-col items-center md:flex-row md:space-x-8 p-8 shadow-lg rounded-lg w-full max-w-4xl bg-white text-blue-800"
    >
      <div class="user-dashboard-left mb-4 md:mb-0 flex-1">
        <TheCalendar @select-date="addDate" />
      </div>
      <div class="user-dashboard-right mb-4 md:mb-0 flex-1">
        <DoctorsComponent @select-doctor="addDoctor" />
        <div class="mt-6">
          <button class="btn btn-info text-white" @click="addVisit">
            Add Visit
          </button>
        </div>
      </div>
    </div>
    <p>Wizyta: {{ doctorName }} dnia: {{ date }}</p>
  </div>
</template>

<script>
import DoctorsComponent from "../../doctor/DoctorsComponent.vue";
import TheCalendar from "../TheCalendar.vue";

export default {
  components: { TheCalendar, DoctorsComponent },
  data() {
    return {
      doctorName: null,
      date: null,
    };
  },
  methods: {
    addDoctor(doctorName) {
      this.doctorName = doctorName;
    },
    addDate(emitDate) {
      this.date = emitDate;
    },
    addVisit() {
      confirm(
        `Do you want to confirm an appointment with ${this.doctorName} on ${this.date} ?`
      );
    },
  },
};
</script>

<style>
</style>
