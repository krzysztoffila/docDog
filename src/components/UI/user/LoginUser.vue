<template>
  <div class="login__page flex-container">
    <form
      @submit.prevent="submitFormLogin"
      class="login bg-gradient-to-b from-blue-500 via-blue-400 to-blue-300 p-10 rounded-lg shadow-lg relative transform -translate-x-1/2 -translate-y-1/2 transition-shadow"
    >
      <input
        v-model="email"
        type="email"
        placeholder="Email"
        class="font-asap block rounded-md text-black bg-white w-full border-0 p-4 my-4"
      />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="font-asap block rounded-md text-black bg-white w-full border-0 p-4 my-4"
      />
      <div class="flex justify-evenly">
        <button class="btn btn-success text-white">Login</button>
        <div>
          <router-link to="/register" class="btn btn-warning text-white">
            Register
          </router-link>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Cookies from "js-cookie";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async submitFormLogin() {
      const auth = getAuth();
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );
        const user = userCredential.user;

        const idToken = await user.getIdToken();
        sessionStorage.setItem("userToken", idToken);
        Cookies.set("userToken", idToken, { expires: 1 });

        this.$store.commit("user/setUser", user);
        this.$store.commit("Toast/addToast", {
          message: `Hello, ${this.email}!`,
          variant: "alert-success",
        });
        this.$router.push("/dashboard");
      } catch (error) {
        this.$store.commit("Toast/addToast", {
          message: "Login failed. Please check your credentials.",
          variant: "alert-danger",
        });
      }
      this.email = "";
      this.password = "";
    },
  },
};
</script>
<style lang="scss" scoped>
.flex-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.login {
  overflow: hidden;
  background-image: linear-gradient(to bottom, #0dcaf0, #1d4ed8, #1d4ed8);
  padding: 40px 30px 30px 30px;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  transform: translate(-50%, -50%);
  transition: transform 300ms, box-shadow 300ms;
  box-shadow: 5px 10px 10px rgba(0, 225, 255, 0.2);

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 600px;
    height: 600px;
    border-top-left-radius: 40%;
    border-top-right-radius: 45%;
    border-bottom-left-radius: 35%;
    border-bottom-right-radius: 40%;
    z-index: -1;
  }

  &::before {
    left: 40%;
    bottom: -130%;
    background-color: rgba(0, 0, 0, 0.15);
    animation: wawes 6s infinite linear;
  }

  &::after {
    left: 35%;
    bottom: -125%;
    background-color: rgba(0, 225, 255, 0.2);
    animation: wawes 7s infinite;
  }

  > input {
    font-family: "Asap", sans-serif;
    display: block;
    border-radius: 5px;
    font-size: 16px;
    background: white;
    width: 100%;
    border: 0;
    padding: 10px 10px;
    margin: 15px -10px;
  }
}

@keyframes wawes {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
