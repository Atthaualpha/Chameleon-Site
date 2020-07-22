<template>
  <li :class="isActive">
    <a>
      <span class="icon is-small">
        <i class="fas" :class="'fa-'+tabIcon" aria-hidden="true"></i>
      </span>
      <span>{{tabTitle}}</span>
    </a>
  </li>
</template>

<script>
export default {
  props: ["tabTitle", "tabIcon", "activeTab"],
  computed: {
    isActive() {
      return this.tabTitle == this.activeTab ? "is-active" : "";
    }
  }
};
</script>

<style>
</style>