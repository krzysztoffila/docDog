<template>
  <div>
    <h2 class="text-lg font-semibold mb-4">Personal Information</h2>
    <input
      type="text"
      :value="emailAddress"
      class="block input input-bordered mb-4"
      disabled
    />
    <input
      type="text"
      :value="fullName"
      class="block input input-bordered"
      disabled
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("User", {
      fullName: (state) => state.user.fullName,
      emailAddress: (state) => state.user.email,
    }),
  },
};
</script>

<style>
</style>