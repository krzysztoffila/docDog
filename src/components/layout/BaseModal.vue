<template>
  <dialog ref="modal" class="modal" :open="isVisible">
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
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("Modal", {
      isVisible: (state) => state.modal.isVisible,
      title: (state) => state.modal.title,
      message: (state) => state.modal.message,
      confirmText: (state) => state.modal.confirmText,
      closeText: (state) => state.modal.closeText,
      onConfirm: (state) => state.modal.onConfirm,
    }),
  },
  watch: {
    isVisible(val) {
      console.log("Modal visibility changed:", val);
      if (val) {
        this.$refs.modal.showModal();
      } else {
        this.$refs.modal.close();
      }
    },
  },
  methods: {
    closeModal() {
      this.$store.dispatch("Modal/closeModal");
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
