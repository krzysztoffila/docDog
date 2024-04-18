<template>
  <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <form @submit.prevent="loginUser" class="card-body">
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
          <router-link to="/register">
            <a href="#" class="label-text-alt link link-hover"
              >Already not registred? - Register!</a
            >
          </router-link>
        </label>
      </div>
      <div class="form-control mt-6">
        <button class="btn btn-primary">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    loginUser() {
      const userData = {
        email: this.email,
        password: this.password,
      };
      const { email, password } = userData;
      alert(`Data: ${email}, password: ${password}`);
    },
  },
};
</script>

<style></style>
