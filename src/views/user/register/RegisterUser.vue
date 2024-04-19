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
            v-model="email"
            type="text"
            placeholder="Email Address"
            class="w-full input input-bordered"
          />
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
          <p class="text-red-800" v-show="password !== confirmPassword">
            Passwords are incorrect
          </p>
        </div>
        <div>
          <button class="btn btn-block" :class="signUpBtnClass">Sign Up</button>
        </div>

        <router-link to="/login">
          Already have an account ?
          <span class="text-blue-600 hover:text-blue-800 hover:underline"
            >Login
          </span></router-link
        >
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      passwordsValid: false,
    };
  },
  computed: {
    signUpBtnClass() {
      return this.password !== this.confirmPassword
        ? "btn-disabled"
        : "btn-active";
    },
  },
  methods: {
    registerUser() {
      const registeredData = {
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
      };
      const { email, password, confirmPassword } = registeredData;
      alert(`DATA: ${email}, ${password}, ${confirmPassword}`);
    },
    isValid() {
      this.passwordsValid = !this.passwordsValid;
    },
  },
};
</script>

<style></style>
