<template>
  <div class="container">
    <div class="column is-flex">
      <main-header class="column is-2"></main-header>
      <main class="column is-10">
        <transition
          enter-active-class="animate__animated animate__fadeInRight"
          leave-active-class="animate__animated animate__fadeOutRight"
        >
          <growl-message v-if="showGrowl"></growl-message>
        </transition>
        <router-view />
        <main-footer></main-footer>
      </main>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import GrowlMessage from "./components/Base/BaseGrowl";
export default {
  computed: {
    showGrowl() {
      return this.$store.getters["baseGrowl/status"];
    },
  },
  components: {
    mainHeader: Header,
    mainFooter: Footer,
    GrowlMessage,
  },
};
</script>

<style>
.jsoneditor-menu {
  display: none;
}
body {
  background-color: hsl(206, 70%, 96%);
}

.list-animate-enter-active,
.list-animate-leave-active {
  transition: all 1s;
}
.list-animate-enter,
.list-animate-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
