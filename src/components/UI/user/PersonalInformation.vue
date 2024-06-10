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
export default {
  computed: {
    fullName() {
      return this.$store.state.user.fullName;
    },
    emailAddress() {
      return this.$store.state.user.email;
    },
  },
};
</script>

<style>
</style>