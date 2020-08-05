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
      this.$store.dispatch("projects/createProject", { name: this.name });
      this.$store.commit("baseModal/closeModal");
      this.name = "";
    },
  },
  components: {
    baseModal: BaseModal,
  },
};
</script>

<style>
</style>