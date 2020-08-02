<template>
  <li :class="isActive">
    <a>
      <span class="icon is-small">
        <i class="fas" :class="'fa-'+tabIcon" aria-hidden="true"></i>
      </span>
      <span class="is-relative">
        <slot name="bagde"></slot>
        {{tabTitle}}
      </span>
    </a>
  </li>
</template>

<script>
export default {
  props: ["tabTitle", "tabIcon", "activeTab"],
  computed: {
    isActive() {
      return this.tabTitle == this.activeTab ? "is-active" : "";
    },
  },
};
</script>

<style>
.badge {
  background-color: rgb(50, 152, 220);
  border: 2px solid rgba(0, 0, 0, 0);
  border-radius: 14px;
  box-shadow: 0 0 0 2px #fff;
  color: rgb(255, 255, 255);
  font-size: 0.65rem;
  height: 14px;
  line-height: 8px;
  min-width: 14px;
  overflow: hidden;
  padding: 0.05rem 0.15rem;
  position: absolute;
  right: 0;
  text-overflow: ellipsis;
  top: 0;
  transform: translate(50%, -50%);
  white-space: nowrap;
}
</style>