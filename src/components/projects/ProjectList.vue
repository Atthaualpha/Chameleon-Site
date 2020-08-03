<template>
  <div>
    <project v-for="(project) in projects" :key="project.id" :project="project"></project>
  </div>
</template>

<script>
import Project from "./Project";
import axios from "axios";
export default {
  computed: {
    projects() {
      return this.$store.getters["projects/projectList"];
    },
  },
  methods: {
    async searchProjects() {
      await this.$store.dispatch("projects/searchProjects");
    },
  },
  components: {
    project: Project,
  },
  mounted() {
    this.searchProjects();
  },
};
</script>

<style>
</style>