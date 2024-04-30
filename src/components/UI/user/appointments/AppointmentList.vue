<template>
  <div>
    <h2 class="text-lg font-semibold mb-4">Your Appointments</h2>
    <ul>
      <li v-for="date in dates" :key="date" class="flex items-center">
        <BadgeElement />
        <p>{{ date }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import BadgeElement from "./BadgeElement.vue";
export default {
  components: {
    BadgeElement,
  },
  data() {
    return {
      dates: ["27.08.2024", "28.09.2024", "29.10.2024", "30.11.2024"],
    };
  },
};
</script>

<style>
</style>