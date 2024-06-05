<template>
  <div>
    <h2 class="text-lg font-semibold mb-4">Your Appointments:</h2>
    <ul>
      <li
        v-for="(date, index) in appointments"
        :key="index"
        class="flex items-center mb-2"
      >
        <BadgeElement>
          <template v-if="index === 0" #pending>
            {{ date.date }}
            <div class="badge-info badge mr-4">{{ date.status }}</div>
          </template>
          <template v-else-if="index === 1" #visited>
            {{ date.date }}
            <div class="badge-success badge mr-4">{{ date.status }}</div>
          </template>
          <template v-else-if="index === 2" #cancelled>
            {{ date.date }}
            <div class="badge-error badge mr-4">{{ date.status }}</div>
          </template>
          <template v-else #pending>
            {{ date.date }}
            <div class="badge-info badge mr-4">{{ date.status }}</div>
          </template>
        </BadgeElement>
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
  props: {
    appointments: Array,
  },
};
</script>