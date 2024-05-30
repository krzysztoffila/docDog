<template>
  <div>
    <h2 class="text-lg font-semibold mb-4">Your Appointments:</h2>
    <ul>
      <li
        v-for="(date, index) in dates"
        :key="index"
        class="flex items-center mb-2"
      >
        <BadgeElement>
          <template v-if="index === 0" #pending>
            <div class="badge-info badge mr-4">Pending</div>
          </template>
          <template v-else-if="index === 1" #visited>
            <div class="badge-success badge mr-4">Visited</div>
          </template>
          <template v-else-if="index === 2" #cancelled>
            <div class="badge-error badge mr-4">Cancelled</div>
          </template>
          <template v-else #pending>
            <div class="badge-info badge mr-4">Pending</div>
          </template>
        </BadgeElement>
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