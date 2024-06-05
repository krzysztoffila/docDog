<template>
  <div>
    <h2 class="text-lg font-semibold mb-4">Personal Information</h2>
    <input
      type="text"
      :value="mail"
      class="block input input-bordered mb-4"
      disabled
    />
    <input
      type="text"
      :value="personalData"
      class="block input input-bordered"
      disabled
    />
  </div>
</template>

<script>
export default {
  props: {
    mail: {
      type: String,
      required: true,
    },
    personalData: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>