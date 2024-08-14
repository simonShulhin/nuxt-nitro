<script setup lang="ts">
interface AsyncData<T> {
  data: Ref<T | null>;
  pending: Ref<boolean>;
  error: Ref<Error | null>;
}

const ditto: Ref<null | AsyncData<void>> = ref(null);

// const { data: ditto } = await useFetch("https://pokeapi.co/api/v2/pokemon/ditto");
// window.localStorage.setItem("url", "https://pokeapi.co/api/v2/pokemon/ditto");
// const url = window.localStorage.getItem("url");
// const ditto = url ? await useFetch(url) : null;
// console.log(ditto);
const { data: res, error } = await useFetch("/api/pikachu");

// onMounted(async () => {
//   console.log(localStorage);
//   localStorage.setItem("url", "https://pokeapi.co/api/v2/pokemon/ditto");
//   const url = window.localStorage.getItem("url");
//   ditto.value = url ? await useFetch(url) : null;
// });
</script>

<template>
  <div>
    <h1>Nuxt 3 server</h1>
    <!-- <pre v-if="ditto">{{ ditto.data }}</pre> -->
    <pre v-if="res">{{ res }}</pre>
    <ul v-if="res">
      <li><img :src="res.sprite" alt="" /></li>
      <li>
        <p>{{ res.id }}: {{ res.name }}</p>
      </li>
    </ul>
    <pre v-if="error">{{ error }}</pre>
  </div>
</template>
