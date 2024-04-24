<template>
  <div id="app" data-theme="aqua">
    <header>
      <TheNavbar />
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
export default {
  components: {
    TheNavbar,
    TheFooter,
  },
};
</script>
<style lang="scss"></style>

