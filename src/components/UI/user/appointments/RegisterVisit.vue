<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-blue-300 p-4"
  >
    <h2 class="text-3xl font-bold mb-8 text-blue-800">REGISTER VISIT</h2>
    <div
      class="user-dashboard-container flex flex-col items-center md:flex-row md:space-x-8 p-8 shadow-lg rounded-lg w-full max-w-4xl bg-white"
    >
      <div class="user-dashboard-left mb-4 md:mb-0 flex-1 text-blue-800">
        <TheCalendar />
      </div>
      <div class="user-dashboard-right mb-4 md:mb-0 flex-1 text-blue-800">
        <DoctorsComponent @select-doctor="addVisit" />
      </div>
    </div>
    <p>Wizyta: {{ doctorName }} dnia:</p>
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
    };
  },
  methods: {
    addVisit(doctorName) {
      this.doctorName = doctorName; // Ustawiamy wartość doctorName na nazwę doktora przekazaną przez emitowane zdarzenie
      alert(`You added a visit with ${doctorName}.`);
    },
  },
};
</script>

<style>
</style>
