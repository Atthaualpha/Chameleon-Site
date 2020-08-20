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
        <ul>
          <transition
            enter-active-class="animate__animated animate__fadeInUp"
            leave-active-class="animate__animated animate__fadeOutDown"
          >
            <li v-if="project && project.id">
              <router-link
                :to="'/requests/'+project.id"
                tag="a"
                active-class="is-active"
                :class="project.id ? 'is-active': ''"
              >{{project.name}}</router-link>
            </li>
          </transition>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  computed: {
    project() {
      return this.$store.getters["menu/currentProject"];
    },
  },
};
</script>

<style>
</style>