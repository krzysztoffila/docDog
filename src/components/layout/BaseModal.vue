<template>
  <div v-if="isModalVisible" class="modal-overlay">
    <div class="modal">
      <div class="modal-box">
        <h3 class="text-lg font-bold">Hello!</h3>
        <p class="py-4">This modal works with a hidden checkbox!</p>
      </div>
      <label class="modal-backdrop" @click="hideModal">Close</label>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["isModalVisible"]),
  },
  methods: {
    ...mapActions(["hideModal"]),
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}

.modal-backdrop {
  position: absolute;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
  color: #333;
}
</style>
