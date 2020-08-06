<template>
  <div>
    <project v-for="(project) in projectList" :key="project._id" :project="project"></project>
  </div>
</template>

<script>
import Project from "./Project";
export default {
  props: {
    projectList: {
      type: Array,
      required: true,
    },
  },
  components: {
    project: Project,
  },
};
</script>

<style>
</style>