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
          :value="doctor.name"
          v-model="selectedDoctor"
          class="mr-2"
          @change="selectDoctor"
        />
        {{ doctor.name }}
      </label>
    </div>
    <div class="mt-4">
      <p>Selected doctor: {{ selectedDoctor }}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState("Doctor", {
      doctors: (state) => state.doctors,
      selectedDoctor: {
        get() {
          return state.selectedDoctor;
        },
        set(value) {
          this.setSelectedDoctor(value);
        },
      },
    }),
  },
  methods: {
    ...mapMutations("Doctor", ["setSelectedDoctor"]),
    selectDoctor() {
      this.$emit("select-doctor", this.selectedDoctor);
    },
  },
};
</script>

<style>
</style>
