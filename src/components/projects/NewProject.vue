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
export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    createProject() {
      axios
        .post("/project", { name: this.name })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
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