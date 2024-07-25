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
          <button
            class="btn btn-warning text-white mr-3"
            @click="backToDashboard"
          >
            Back to dashboard
          </button>
          <button class="btn btn-info text-white" @click="addVisit">
            Add Visit
          </button>
        </div>
      </div>
    </div>
    <p>Wizyta: {{ doctorName }} dnia: {{ date }}</p>
    <BaseModal />
  </div>
</template>

<script>
import DoctorsComponent from "@/components/UI/doctor/DoctorsComponent.vue";
import TheCalendar from "@/components/UI/user/TheCalendar.vue";
import BaseModal from "@/components/layout/BaseModal.vue";
import { mapActions } from "vuex";

export default {
  components: { TheCalendar, DoctorsComponent, BaseModal },
  data() {
    return {
      doctorName: null,
      date: null,
    };
  },
  methods: {
    ...mapActions("Modal", ["openModal"]),
    ...mapActions("Toast", ["addToast"]),
    addDoctor(doctor) {
      this.doctorName = doctor.name;
    },
    addDate(date) {
      this.date = date;
    },
    addVisit() {
      if (!this.doctorName || !this.date) {
        this.addToast({
          message: "Please select a doctor and date before confirming.",
          variant: "alert-warning",
        });
        return;
      }
      this.openModal({
        title: "Confirm Appointment",
        message: `Do you want to confirm an appointment with ${this.doctorName} on ${this.date}?`,
        confirmText: "Confirm",
        closeText: "Cancel",
        onConfirm: this.handleConfirmVisit,
      });
    },
    handleConfirmVisit() {
      this.addToast({
        message: `Appointment with ${this.doctorName} on ${this.date} confirmed.`,
        variant: "alert-success",
      });
    },
    backToDashboard() {
      this.openModal({
        title: "Cancel Appointment",
        message: "Are you sure you want to cancel your appointment?",
        confirmText: "Yes",
        closeText: "No",
        onConfirm: this.handleCancelVisit,
      });
    },
    handleCancelVisit() {
      this.doctorName = null;
      this.date = null;
      this.$router.push("/dashboard");
      this.addToast({
        message: "Appointment has been canceled",
        variant: "alert-error",
      });
    },
  },
};
</script>

<style>
</style>
