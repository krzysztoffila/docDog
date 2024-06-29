<template>
  <dialog ref="modal" class="modal">
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
  props: {
    title: {
      type: String,
      default: "Modal Title",
    },
    message: {
      type: String,
      default: "Modal Message",
    },
    confirmText: {
      type: String,
      default: "Confirm",
    },
    closeText: {
      type: String,
      default: "Close",
    },
    onConfirm: {
      type: Function,
      default: null,
    },
  },
  methods: {
    openModal() {
      this.$refs.modal.showModal();
    },
    closeModal() {
      this.$refs.modal.close();
    },
    confirmAction() {
      if (this.onConfirm) {
        this.onConfirm();
      }
      this.closeModal();
    },
  },
};
</script>

<style scoped>
</style>
