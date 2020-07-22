<template>
  <div class="column is-6 selectable is-inline-block" @click="openProject">
    <article class="message is-info">
      <div class="message-body">{{name}}</div>
    </article>
  </div>
</template>

<script>
export default {
  props: ["name"],
  methods: {
    openProject() {
      this.$router.push({ path: "/requests" });
    }
  }
};
</script>

<style scoped>
.message:hover {
  background-color: hsl(204, 86%, 53%);
}

.message-body:hover {
  border-color: hsl(48, 100%, 67%) !important;
  color: white !important;
}

.selectable {
  cursor: pointer;
}
</style>