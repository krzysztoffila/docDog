<template>
  <div>
    <h2 class="text-lg font-semibold mb-4">Your Appointments:</h2>
    <ul>
      <li
        v-for="(appointment, index) in appointments"
        :key="index"
        class="flex items-center mb-2"
      >
        <BadgeElement>
          <template v-if="appointment.status === 'Pending'" #pending>
            <div class="badge-info badge mr-4">{{ appointment.status }}</div>
            {{ appointment.date }} - {{ appointment.doctor }}
          </template>
          <template v-else-if="appointment.status === 'Visited'" #visited>
            <div class="badge-success badge mr-4">{{ appointment.status }}</div>
            {{ appointment.date }} - {{ appointment.doctor }}
          </template>
          <template v-else-if="appointment.status === 'Cancelled'" #cancelled>
            <div class="badge-error badge mr-4">{{ appointment.status }}</div>
            {{ appointment.date }} - {{ appointment.doctor }}
          </template>
        </BadgeElement>
      </li>
    </ul>
  </div>
</template>

<script>
import BadgeElement from "@/components/layout/BadgeElement.vue";
export default {
  components: {
    BadgeElement,
  },
  props: {
    appointments: {
      type: Array,
      required: true,
    },
  },
};
</script>
