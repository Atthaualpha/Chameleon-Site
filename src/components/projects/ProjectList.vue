<template>
  <div>
    <transition-group name="project-list" >
      <project v-for="(project) in projectList" :key="project._id" :project="project"></project>
    </transition-group>
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
.project-list-enter-active,
.project-list-leave-active {
  transition: all 1s;
}
.project-list-enter,
.project-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>