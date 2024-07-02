<template>
  <div class="flex flex-col">
    <label for="doctors" class="mb-2 font-bold">Choose a doctor:</label>
    <div id="doctors" class="flex flex-col space-y-2">
      <label
        class="flex items-center"
        v-for="doctor in doctors"
        :key="doctor.doctorId"
      >
        <input
          type="radio"
          name="doctor"
          :value="doctor.doctorId"
          v-model="selectedDoctorId"
          class="mr-2"
          @change="selectDoctor(doctor)"
        />
        {{ doctor.name }}
      </label>
    </div>
    <div class="mt-4">
      <p v-if="selectedDoctor">Selected doctor: {{ selectedDoctor.name }}</p>
      <p v-else>Select a doctor</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState("Doctor", {
      doctors: (state) => state.doctors,
      selectedDoctor: (state) => state.selectedDoctor,
    }),
    selectedDoctorId: {
      get() {
        return this.selectedDoctor ? this.selectedDoctor.doctorId : null;
      },
      set(doctorId) {
        const selectedDoctor = this.doctors.find(
          (d) => d.doctorId === doctorId
        );
        if (selectedDoctor) {
          this.setSelectedDoctor(selectedDoctor);
          this.$emit("select-doctor", selectedDoctor);
        }
      },
    },
  },
  methods: {
    ...mapActions("Doctor", ["setSelectedDoctor"]),
    selectDoctor(doctor) {
      this.selectedDoctorId = doctor.doctorId;
    },
  },
};
</script>

<style>
</style>
