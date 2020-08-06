<template>
  <base-modal @mainAction="createProject">
    <template #md-title>New Project</template>
    <template #md-body>
      <div class="field">
        <label class="label">Project Name</label>
        <input type="text" class="input" placeholder="Project Name" v-model="name" />
      </div>
    </template>
  </base-modal>
</template>

<script>
import BaseModal from "../Base/BaseModal";
import axios from "axios";
import projectService from "@/services/projects/projectService";
export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    createProject() {
      projectService.createProject({ name: this.name }, (err, result) => {
        if (err) {
          console.log(err);
          return;
        }

        this.$store.commit("baseModal/closeModal");
        this.name = "";
        this.$bus.emit("searchProjectList");
      });
    },
  },
  components: {
    baseModal: BaseModal,
  },
};
</script>

<style>
</style>