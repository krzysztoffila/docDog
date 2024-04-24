<template>
  <div class="hero min-h-screen bg-cover bg-center" :style="backgroundImageUrl">
    <div class="hero-content flex-col lg:flex-row-reverse">
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
  data() {
    return {
      loginText: "Login now!",
      heroContent: `Join us and experience the future of pet healthcare registration. Sign
          up for quick and convenient access to online veterinary appointments.
          We're here to provide you with a seamless registration process and
          expert care for your furry companions.`,
    };
  },
  computed: {
    backgroundImageUrl() {
      return {
        backgroundImage: `url('https://vet-med.pl/wp-content/uploads/2023/06/Vetmed-2.jpg')`,
      };
    },
  },
};
</script>

<style scoped>
.container {
  width: 80%;
  max-width: 1100px;
}
.hero {
  color: #0dcaf0;
  padding: 300px 50px;
}
</style>
