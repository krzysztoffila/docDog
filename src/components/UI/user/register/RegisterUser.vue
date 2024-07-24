<template>
  <div
    data-theme="light"
    class="relative flex flex-col justify-center h-screen overflow-hidden bg-blue-500"
  >
    <div
      class="w-full p-6 m-auto bg-blue-400 rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-xl"
    >
      <h1 class="text-3xl font-semibold text-center text-gray-700">Register</h1>
      <form @submit.prevent="registerUser" class="space-y-4 bg-blue-400">
        <div>
          <label class="label">
            <span class="text-base label-text">Email</span>
          </label>
          <input
            v-model.trim="email"
            @input="validateEmail"
            type="text"
            placeholder="Email Address"
            class="w-full input input-bordered bg-blue-100"
          />
          <p class="text-red-800" v-if="emailValidity === 'invalid'">
            Please enter a valid email address
          </p>
        </div>
        <div>
          <label class="label">
            <span class="text-base label-text">Password</span>
          </label>
          <input
            v-model="password"
            @input="validatePassword"
            type="password"
            placeholder="Enter Password"
            class="w-full input input-bordered bg-blue-100"
          />
          <p class="text-red-800" v-if="passwordValidity === 'invalid'">
            Password must be at least 8 characters long and include letters,
            numbers, and special characters
          </p>
        </div>
        <div>
          <label class="label">
            <span class="text-base label-text">Confirm Password</span>
          </label>
          <input
            v-model="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            class="w-full input input-bordered bg-blue-100"
          />
        </div>
        <div style="height: 20px">
          <p class="text-red-800" v-if="password !== confirmPassword">
            Passwords do not match
          </p>
        </div>
        <div>
          <button class="btn btn-block" :class="signUpBtnClass">Sign Up</button>
        </div>

        <router-link to="/login">
          Already have an account?
          <button class="hover:text-blue-800 hover:underline text-white">
            Login
          </button>
        </router-link>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      emailValidity: "pending",
      passwordValidity: "pending",
    };
  },
  computed: {
    signUpBtnClass() {
      if (
        this.email === "" ||
        this.password !== this.confirmPassword ||
        this.password === "" ||
        this.confirmPassword === "" ||
        this.emailValidity === "invalid" ||
        this.passwordValidity === "invalid"
      ) {
        return "btn-disabled";
      } else {
        return "btn-active btn-success text-white";
      }
    },
  },
  methods: {
    async registerUser() {
      if (
        this.emailValidity === "invalid" ||
        this.passwordValidity === "invalid"
      ) {
        this.$store.commit("Toast/addToast", {
          message: "Please fix the errors in the form.",
          variant: "alert-error",
        });
        return;
      }

      try {
        const url = `${process.env.VUE_APP_FIREBASE_DATABASE_URL}/users.json`;
        console.log("Sending request to:", url);
        const response = await axios.post(url, {
          email: this.email,
          password: this.password,
        });
        if (response.status === 200) {
          this.email = "";
          this.password = "";
          this.confirmPassword = "";
          this.$store.commit("Toast/addToast", {
            message: "User was successfully registered!",
            variant: "alert-success",
          });
        } else {
          throw new Error("Registration failed");
        }
      } catch (error) {
        console.error(error);
        this.$store.commit("Toast/addToast", {
          message: "Registration failed. Please try again.",
          variant: "alert-error",
        });
      }
    },

    validateEmail() {
      const mailformat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (mailformat.test(this.email)) {
        this.emailValidity = "valid";
      } else {
        this.emailValidity = "invalid";
      }
    },

    validatePassword() {
      const passwordFormat =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
      if (passwordFormat.test(this.password)) {
        this.passwordValidity = "valid";
      } else {
        this.passwordValidity = "invalid";
      }
    },
  },
};
</script>