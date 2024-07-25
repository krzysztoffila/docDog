<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <router-link to="/">
        <a class="btn btn-ghost text-xl">docDog</a>
      </router-link>
    </div>
    <div class="flex-none gap-2">
      <input type="checkbox" value="forest" class="toggle theme-controller" />
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img
              alt="User Profile"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            />
          </div>
        </div>
        <ul
          tabindex="0"
          class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <router-link to="/dashboard"><a>Dashboard</a></router-link>
          </li>
          <li>
            <router-link to="/registervisit"><a>Register Visit</a></router-link>
          </li>
          <li v-if="!userIsLogged">
            <router-link to="/login"><a>Login</a></router-link>
          </li>
          <li v-if="userIsLogged">
            <a @click="handleLogout">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters("User", ["userIsLogged"]),
  },
  methods: {
    ...mapActions("User", ["logout"]),
    async handleLogout() {
      try {
        await this.logout();
        this.$store.commit("Toast/addToast", {
          message: "Successfully logged out!",
          variant: "alert-success",
        });
        this.$router.push("/login"); // Redirect after logout
      } catch (error) {
        console.error("Logout error:", error);
        this.$store.commit("Toast/addToast", {
          message: "Logout failed. Please try again.",
          variant: "alert-danger",
        });
      }
    },
  },
};
</script>

<style scoped>
/* Twoje style tutaj */
</style>
