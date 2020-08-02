<template>
  <div class="container">
    <div class="column is-flex">
      <main-header class="column is-2"></main-header>
      <main class="column is-10">
        <router-view />
        <main-footer></main-footer>
      </main>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  components: {
    mainHeader: Header,
    mainFooter: Footer,
  },
};
</script>

<style>
.jsoneditor-menu {
  display: none;
}
body {
  background-color: rgb(250, 250, 250);
}
</style>
