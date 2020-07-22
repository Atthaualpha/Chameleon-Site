<template>
  <aside class="menu">
    <p class="menu-label">Chameleon Server</p>
    <ul class="menu-list">
      <li>
        <router-link to="/" :exact="true" tag="a" active-class="is-active">
          <i class="fas fa-home"></i>
          Home
        </router-link>
      </li>
      <li>
        <router-link to="/projects" :exact="true" tag="a" active-class="is-active">
          <i class="fas fa-lightbulb"></i>
          Projects
        </router-link>
      </li>
      <li>
        <router-link to="/tester" :exact="true" tag="a" active-class="is-active">
          <i class="fas fa-flask"></i>
          Laboratory
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {};
</script>

<style>
</style>