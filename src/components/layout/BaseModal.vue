<template>
  <dialog ref="modal" class="modal" v-if="isVisible">
    <div class="modal-box">
      <h3 class="text-lg font-bold">{{ title }}</h3>
      <p class="py-4">{{ message }}</p>
      <div class="modal-action">
        <button class="btn" @click="confirmAction">{{ confirmText }}</button>
        <button class="btn" @click="closeModal">{{ closeText }}</button>
      </div>
    </div>
  </dialog>
</template>

<script>
export default {
  computed: {
    isVisible() {
      return this.$store.state.modal.isVisible;
    },
    title() {
      return this.$store.state.modal.title;
    },
    message() {
      return this.$store.state.modal.message;
    },
    confirmText() {
      return this.$store.state.modal.confirmText;
    },
    closeText() {
      return this.$store.state.modal.closeText;
    },
  },
  methods: {
    closeModal() {
      this.$store.dispatch("closeModal");
    },
    confirmAction() {
      const confirmHandler = this.$store.state.modal.onConfirm;
      if (confirmHandler) {
        confirmHandler();
      }
      this.closeModal();
    },
  },
};
</script>

<style scoped>
</style>
