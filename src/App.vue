<template>
  <div id="app" data-theme="aqua">
    <header>
      <NavbarComponent/>
    </header>
    <main>
      <router-view> </router-view>
    </main>
  </div>
</template>
<script>
import NavbarComponent from "@/components/navbar-component.vue"
export default {
  components:{
    NavbarComponent,
  }
}
</script>
<style lang="scss"></style>

