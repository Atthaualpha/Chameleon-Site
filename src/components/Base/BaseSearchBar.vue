<template>
  <div class="columns box">
    <div class="column is-9">
      <div class="field">
        <div class="control has-icons-left">
          <slot name="search"></slot>
          <span class="icon is-small is-left">
            <i class="fas fa-search"></i>
          </span>
        </div>
      </div>
      <div v-if="hasFilters" v-show="filterStatus">
        <slot name="search-filter"></slot>
      </div>
    </div>
    <div class="column is-1" v-if="hasFilters">
      <button class="button" @click="toggleFilter">
        <span class="icon is-small">
          <i class="fas fa-filter"></i>
        </span>
      </button>
    </div>
    <div class="column is-2">
      <slot name="create"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["hasFilters"],
  data() {
    return {
      filterStatus: false
    };
  },
  methods: {
    toggleFilter() {
      this.filterStatus = !this.filterStatus;
    }
  }
};
</script>

<style>
</style>