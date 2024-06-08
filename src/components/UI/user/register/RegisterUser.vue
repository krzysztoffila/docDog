<template>
  <div
    data-theme="light"
    class="relative flex flex-col justify-center h-screen overflow-hidden"
  >
    <div
      class="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-xl"
    >
      <h1 class="text-3xl font-semibold text-center text-gray-700">Register</h1>
      <form @submit.prevent="registerUser" class="space-y-4">
        <div>
          <label class="label">
            <span class="text-base label-text">Email</span>
          </label>
          <input
            v-model.trim="email"
            type="text"
            placeholder="Email Address"
            class="w-full input input-bordered"
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
            type="password"
            placeholder="Enter Password"
            class="w-full input input-bordered"
          />
        </div>
        <div>
          <label class="label">
            <span class="text-base label-text">Confirm Password</span>
          </label>
          <input
            v-model="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            class="w-full input input-bordered"
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
          <button class="text-blue-600 hover:text-blue-800 hover:underline">
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
    };
  },
  computed: {
    signUpBtnClass() {
      if (
        this.email === "" ||
        this.password !== this.confirmPassword ||
        this.password === "" ||
        this.confirmPassword === ""
      ) {
        return "btn-disabled";
      } else {
        return "btn-active btn-success text-white";
      }
    },
  },
  methods: {
    async registerUser() {
      try {
        const response = await axios.post(
          "https://doc-dog-42e1c-default-rtdb.firebaseio.com/users.json",
          {
            email: this.email,
            password: this.password,
          }
        );
        if (response.status === 200) {
          this.email = "";
          this.password = "";
          this.confirmPassword = "";
          alert("User was successfully registered!");
        } else {
          throw new Error("Registration failed");
        }
      } catch (error) {
        console.error(error);
      }
    },

    validateEmail(emailInput) {
      const mailformat =
        /^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/;
      if (emailInput.match(mailformat)) {
        return true;
      } else {
        this.emailValidity = "invalid";
        return false;
      }
    },
  },
};
</script>

<style></style>
