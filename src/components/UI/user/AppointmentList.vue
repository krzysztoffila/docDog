<template>
  <div>
    <h2 class="text-lg font-semibold mb-4">Your Appointments:</h2>
    <ul>
      <li
        v-for="(appointment, index) in appointments"
        :key="index"
        class="flex items-center mb-2"
      >
        <BaseBadge>
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
          <template v-else #pending>
            <div class="badge-info badge mr-4">{{ appointment.status }}</div>
            {{ appointment.date }} - {{ appointment.doctor }}
          </template>
        </BaseBadge>
      </li>
    </ul>
  </div>
</template>

<script>
import BaseBadge from "@/components/layout/BaseBadge.vue";
import { mapState } from "vuex";

export default {
  components: {
    BaseBadge,
  },
  computed: {
    ...mapState("User", {
      appointments: (state) => (state.user ? state.user.appointmentsData : []),
    }),
  },
};
</script>

<style>
</style>
