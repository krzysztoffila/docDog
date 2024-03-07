<template>
  <div class="login__page flex-container">
    <form
      class="login bg-gradient-to-b from-blue-500 via-blue-400 to-blue-300 p-10 rounded-lg shadow-lg relative transform -translate-x-1/2 -translate-y-1/2 transition-transform transition-shadow"
    >
      <input
        type="text"
        placeholder="Email"
        class="font-asap block rounded-md text-black bg-white w-full border-0 p-4 my-4"
      />
      <input
        type="password"
        placeholder="Password"
        class="font-asap block rounded-md text-black bg-white w-full border-0 p-4 my-4"
      />
      <b-button pill variant="success">Login</b-button>
    </form>
  </div>
</template>

<style lang="scss">
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
  margin-top: 400px;
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
