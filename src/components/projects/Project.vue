<template>
  <div class="col m4">
    <div class="card">
      <div class="card-content blue lighten-3">
        <p>{{name}}</p>
      </div>
      <div class="card-action">
        <a href="#">Open Project</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name"]
};
</script>

<style>
</style>