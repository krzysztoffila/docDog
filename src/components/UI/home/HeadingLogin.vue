<template>
  <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <form @submit.prevent="submitFormLogin" class="card-body">
      <div class="form-control">
        <label class="label">
          <span class="label-text">Email</span>
        </label>
        <input
          v-model="email"
          type="email"
          placeholder="email"
          class="input input-bordered"
          required
        />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Password</span>
        </label>
        <input
          v-model="password"
          type="password"
          placeholder="password"
          class="input input-bordered"
          required
        />
        <label class="label">
          <router-link to="/register" class="label-text-alt link link-hover">
            Already not registered? - Register!
          </router-link>
        </label>
      </div>
      <div class="form-control mt-6">
        <base-button class="btn-primary btn-block">Login</base-button>
      </div>
    </form>
  </div>
</template>

<script>
import BaseButton from "@/components/layout/BaseButton.vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Cookies from "js-cookie";

export default {
  components: { BaseButton },
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

<style></style>