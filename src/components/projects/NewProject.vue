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
          const cause = err.response.cause;
          if (cause) {
            if (cause === "duplicated") {
              this.$store.dispatch("baseGrowl/open", {
                severity: "danger",
                message: "Project with same name, already exists",
              });
            }else{
              this.$store.dispatch("baseGrowl/open", {
                severity: "danger",
                message: "Error creating the project",
              });
            }
          }

          return;
        }

        this.$store.commit("baseModal/closeModal");
        this.name = "";
        this.$bus.emit("searchProjectList");
        this.$store.dispatch("baseGrowl/open", {
          severity: "success",
          message: "Project Created!",
        });
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