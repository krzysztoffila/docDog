<template>
  <div
    class="hero min-h-screen bg-cover bg-center"
    style="
      background-image: url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    "
  >
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="text-center lg:text-left glass p-5 rounded text-white">
        <h1 class="text-5xl font-bold">Login now!</h1>
        <p class="py-6">
          Join us and experience the future of pet healthcare registration. Sign
          up for quick and convenient access to online veterinary appointments.
          We're here to provide you with a seamless registration process and
          expert care for your furry companions.
        </p>
      </div>
      <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
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
              type="password"
              placeholder="password"
              class="input input-bordered"
              required
            />
            <label class="label">
              <router-link to="/registeruser">
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
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
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
