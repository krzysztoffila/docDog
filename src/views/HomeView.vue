<template>
  <div class="hero min-h-screen bg-cover bg-center" :style="backgroundImageUrl">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="text-center lg:text-left glass p-5 rounded text-white">
        <h1 class="text-5xl font-bold">{{ loginText }}</h1>
        <p class="py-6">
          {{ heroContent }}
        </p>
      </div>
      <HeadingLoginComponent />
    </div>
  </div>
</template>

<script>
import HeadingLoginComponent from "@/components/heading-login-component.vue";
export default {
  name: "HomeView",
  components: {
    HeadingLoginComponent,
  },
  data() {
    return {
      loginText: `Login now!`,
      heroContent: `Join us and experience the future of pet healthcare registration. Sign
          up for quick and convenient access to online veterinary appointments.
          We're here to provide you with a seamless registration process and
          expert care for your furry companions.`,
      backgroundImageUrl: {
        backgroundImage: `url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      },
    };
  },
};
</script>

<style>
.container {
  width: 80%;
  max-width: 1100px;
}
.hero {
  color: #0dcaf0;
  padding: 300px 50px;
}
</style>
