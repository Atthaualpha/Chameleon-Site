<template>
  <div class="container">
    <div class="column is-flex">
      <main-header class="column is-3"></main-header>
      <main class="column is-9">
        <router-view />
      </main>
    </div>
    <main-footer></main-footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  components: {
    mainHeader: Header,
    mainFooter: Footer
  }
};
</script>

<style>
</style>
