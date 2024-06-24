<template>
  <div class="toast toast-top toast-end">
    <div
      :class="['alert', toast.variant || defaultVariant]"
      v-for="(toast, i) in toasts"
      :key="i"
      id="my-toast"
    >
      <span> {{ toast.message }}</span>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      // Variants: info, success, error, warning
      defaultVariant: "alert-info",
    };
  },
  computed: {
    ...mapState("Toast", ["toasts"]),
  },
  watch: {
    toasts: {
      handler(toasts) {
        toasts.forEach((toast) => {
          setTimeout(() => {
            this.$store.commit("Toast/removeToast", toast);
          }, 5000);
        });
      },
      deep: true,
    },
  },
};
</script>
<style scoped>
.toast {
  z-index: 9999;
}
</style>