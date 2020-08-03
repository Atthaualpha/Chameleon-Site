<template>
  <div>
    <project v-for="(project,i) in projects" :key="i" :name="project.name"></project>
  </div>
</template>

<script>
import Project from "./Project";
export default {
  data() {
    return {
      projects: [
        { name: "P1" },
        { name: "P2" },
        { name: "P3" },
        { name: "P4" },
      ],
    };
  },
  components: {
    project: Project,
  },
};
</script>

<style>
</style>