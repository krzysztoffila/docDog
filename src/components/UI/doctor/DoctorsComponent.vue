<template>
  <div class="flex flex-col">
    <label for="doctors" class="mb-2 font-bold">Choose a doctor:</label>
    <div id="doctors" class="flex flex-col space-y-2">
      <label class="flex items-center">
        <input
          type="radio"
          name="doctor"
          value="dolittle"
          v-model="selectedDoctor"
          class="mr-2"
        />
        Dr. Dolittle
      </label>
      <label class="flex items-center">
        <input
          type="radio"
          name="doctor"
          value="vetura"
          v-model="selectedDoctor"
          class="mr-2"
        />
        Ace Ventura
      </label>
      <label class="flex items-center">
        <input
          type="radio"
          name="doctor"
          value="oetker"
          v-model="selectedDoctor"
          class="mr-2"
        />
        Dr. Oetker
      </label>
    </div>
    <div class="mt-4">
      <p>Selected doctor: {{ selectedDoctor }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedDoctor: null,
    };
  },
};
</script>

<style>
</style>
