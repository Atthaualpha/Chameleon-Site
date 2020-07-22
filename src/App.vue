<template>
  <div class="container">
    <div class="column is-flex">
      <main-header class="column is-3"></main-header>
      <main class="column is-9">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  components: {
    mainHeader: Header
  }
};
</script>

<style>
</style>
