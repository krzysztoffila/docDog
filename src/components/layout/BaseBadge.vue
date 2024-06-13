<template>
  <div>
    <template v-for="(badge, name) in badgeData">
      <div :key="name" v-if="$slots[name]">
        <slot :name="name">
          <div :class="[badge.class, 'badge', 'mr-4']">{{ badge.name }}</div>
        </slot>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      badgeData: {
        pending: {
          name: "Pending",
          class: "badge-info",
        },
        visited: {
          name: "Visited",
          class: "badge-success",
        },
        cancelled: {
          name: "Cancelled",
          class: "badge-error",
        },
      },
    };
  },
};
</script>

<style>
</style>
