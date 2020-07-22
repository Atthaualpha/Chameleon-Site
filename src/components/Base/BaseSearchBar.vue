<template>
  <div class="columns box">
    <div class="column is-10">
      <div class="field">
        <div class="control has-icons-left">
          <slot name="search"></slot>
          <span class="icon is-small is-left">
            <i class="fas fa-search"></i>
          </span>
        </div>
      </div>
      <slot name="search-filter"></slot>
    </div>
    <div class="column is-2">
      <slot name="create"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>