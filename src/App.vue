<template>
  <div>
    <main-header></main-header>
    <main>
      <div class="container">
        <div class="row">
          <router-view />
        </div>
      </div>
    </main>
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

<style scoped>
main {
  padding-left: 300px;
}
</style>
