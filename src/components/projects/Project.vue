<template>
  <div class="column is-4 is-inline-block">
    <div class="card">
      <div
        class="card-content selectable"
        @mouseenter="changeTitle('Open Project')"
        @mouseleave="changeTitle(project.name)"
        @click="openProject"
      >
        <p class="has-text-centered">{{title}}</p>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item bordered-info">Edit</a>
        <a
          href="#"
          class="card-footer-item has-text-danger bordered-danger"
          @click="deleteProject"
        >Delete</a>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      title: this.project.name,
    };
  },
  methods: {
    openProject() {
      this.$router.push({ path: "/requests" });
    },
    changeTitle(newTitle) {
      this.title = newTitle;
    },
    deleteProject() {
      this.$store.dispatch("projects/deleteProject", {
        projectId: this.project.id,
      });
    },
  },
};
</script>

<style scoped>
.selectable:hover {
  background-color: hsl(171, 100%, 41%);
  color: white !important;
}

.selectable {
  cursor: pointer;
}

.bordered-info:hover {
  background-color: hsl(204, 86%, 53%);
  color: white;
}

.bordered-danger:hover {
  background-color: hsl(348, 100%, 61%);
  color: white !important;
}
</style>