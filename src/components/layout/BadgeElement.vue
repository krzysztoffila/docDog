<template>
  <div>
    <slot name="pending" v-if="$slots.pending">
      <div :class="badgesClass[0]" class="badge mr-4">{{ badgesNames[0] }}</div>
    </slot>
    <slot name="visited" v-if="$slots.visited">
      <div :class="badgesClass[1]" class="badge mr-4">{{ badgesNames[1] }}</div>
    </slot>
    <slot name="cancelled" v-if="$slots.cancelled">
      <div :class="badgesClass[2]" class="badge mr-4">{{ badgesNames[2] }}</div>
    </slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      badgesNames: ["Pending", "Visited", "Cancelled"],
    };
  },
  computed: {
    badgesClass() {
      return ["badge-info", "badge-success", "badge-error"];
    },
  },
};
</script>
