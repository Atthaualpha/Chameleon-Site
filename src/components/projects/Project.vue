<template>
  <div class="column is-4 is-inline-block">
    <div class="card">
      <div
        v-if="!isEditMode"
        class="card-content selectable"
        @mouseenter="changeTitle('Open Project')"
        @mouseleave="changeTitle(project.name)"
        @click="openProject"
      >
        <p class="has-text-centered py-2 has-text-weight-bold">{{title}}</p>
      </div>
      <div v-if="isEditMode" class="card-content">
        <input type="text" class="input" v-model="project.name" />
      </div>
      <footer class="card-footer">
        <a
          v-if="!isEditMode"
          href="#"
          class="card-footer-item bordered-info"
          @click="changeEditMode(true)"
        >Edit</a>
        <a
          v-if="isEditMode"
          href="#"
          class="card-footer-item bordered-info"
          @click="updateProject"
        >Save</a>
        <a
          v-if="isEditMode"
          href="#"
          class="card-footer-item has-text-danger bordered-danger"
          @click="changeEditMode(false)"
        >Cancel</a>
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
      isEditMode: false,
    };
  },
  methods: {
    openProject() {
      this.$router.push({ path: "/requests/" + this.project.id });
    },
    changeTitle(newTitle) {
      this.title = newTitle;
    },
    changeEditMode(mode) {
      this.isEditMode = mode;
    },
    async updateProject() {
      this.$store.dispatch("projects/updateProject", this.project);
      this.changeEditMode(false);
      this.changeTitle(this.project.name);
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