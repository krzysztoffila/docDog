<template>
  <div id="app" data-theme="aqua">
    <header>
      <NavbarComponent />
    </header>
    <main>
      <router-view> </router-view>
    </main>
    <FooterComponent />
  </div>
</template>
<script>
import NavbarComponent from "@/components/layout/TheNavbar.vue";
import FooterComponent from "@/components/layout/TheFooter.vue";
export default {
  components: {
    NavbarComponent,
    FooterComponent,
  },
};
</script>
<style lang="scss"></style>

