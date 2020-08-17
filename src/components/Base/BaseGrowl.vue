<template>
  <div class="notification fixed-growl" :class="severity">
    <button class="delete" @click="hideNotification"></button>
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  computed: {
    severity() {
      return "is-"+this.$store.getters["baseGrowl/severity"];
    },
    message(){
      return this.$store.getters["baseGrowl/message"];
    }

  },
  methods: {
    hideNotification() {
      this.$store.commit("baseGrowl/close");
    },
  },
};
</script>

<style>
.fixed-growl {
  position: fixed !important;
  right: 36px;
  z-index: 1000;
  opacity: 0.8;
}
</style>