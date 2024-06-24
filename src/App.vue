<template>
  <div id="app" data-theme="aqua">
    <header>
      <TheNavbar />
      <Toast />
    </header>
    <main>
      <router-view> </router-view>
    </main>
    <TheFooter />
  </div>
</template>
<script>
import TheNavbar from "@/components/layout/TheNavbar.vue";
import TheFooter from "@/components/layout/TheFooter.vue";
import Toast from "@/components/layout/BaseToast.vue";
export default {
  components: {
    TheNavbar,
    TheFooter,
    Toast,
  },
};
</script>
<style lang="scss"></style>

