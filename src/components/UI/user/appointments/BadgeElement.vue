<template>
  <div :class="badgesClass[1]" class="badge mr-4">{{ badgesNames[1] }}</div>
</template>

<script>
export default {
  data() {
    return {
      badgesNames: ["NEW", "pending", "visited", "cancelled"],
    };
  },
  computed: {
    badgesClass() {
      return ["badge-warning", "badge-info", "badge-success", "badge-error"];
    },
  },
};
</script>

<style>
</style>