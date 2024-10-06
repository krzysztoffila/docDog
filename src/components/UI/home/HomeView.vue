<template>
  <div class="hero min-h-screen bg-cover bg-center">
    <picture>
      <source
        srcset="@/assets/header-background-image.webp"
        type="image/webp"
      />
      <img
        src="@/assets/header-background-image.webp"
        alt="Background image"
        class="absolute inset-0 w-full h-full object-cover"
      />
    </picture>
    <div class="hero-content relative flex-col lg:flex-row-reverse">
      <div class="text-center lg:text-left glass p-5 rounded text-white">
        <h1 class="text-5xl font-bold">{{ loginText }}</h1>
        <p class="py-6">
          {{ heroContent }}
        </p>
      </div>
      <HeadingLogin />
    </div>
  </div>
</template>

<script>
import HeadingLogin from "@/components/UI/home/HeadingLogin.vue";
export default {
  name: "HomeView",
  components: {
    HeadingLogin,
  },
  computed: {
    loginText() {
      return "Login now!";
    },
    heroContent() {
      return `Join us and experience the future of pet healthcare registration. Sign
          up for quick and convenient access to online veterinary appointments.
          We're here to provide you with a seamless registration process and
          expert care for your furry companions.`;
    },
  },
};
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
}
</style>
