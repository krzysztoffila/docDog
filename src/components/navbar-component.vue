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
              alt="Tailwind CSS Navbar component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <ul
          tabindex="0"
          class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <router-link to="/profile"><a>Profile</a></router-link>
          </li>
          <li>
            <router-link to="/registervisit"><a>Register Visit</a></router-link>
          </li>
          <li>
            <router-link to="/login"><a>Login</a></router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>