<template>
  <aside class="menu">
    <p class="menu-label">Chameleon Server</p>
    <ul class="menu-list">
      <li>
        <router-link to="/" :exact="true" tag="a" active-class="is-active">Home</router-link>
      </li>
      <li>
        <router-link to="/projects" :exact="true" tag="a" active-class="is-active">Projects</router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {};
</script>

<style>
</style>