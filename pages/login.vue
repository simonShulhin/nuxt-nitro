<script setup>
const auth = useCookie("pokemon-auth");

function authenticate() {
  auth.value = "best";
}

function logout() {
  auth.value = "";
}
</script>

<template>
  <h1>Login</h1>
  <button @click="authenticate">Login</button>
  <button @click="logout">Logout</button>
</template>
