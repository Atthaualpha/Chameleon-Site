<template>
  <base-modal @mainAction="createProject">
    <template #md-title>New Project</template>
    <template #md-body>
      <div class="field">
        <label class="label">Project Name</label>
        <input type="text" class="input" placeholder="Project Name" />
      </div>
    </template>
  </base-modal>
</template>

<script>
import BaseModal from "../Base/BaseModal";
export default {
  methods: {
    createProject() {
      console.log("created");
    }
  },
  components: {
    baseModal: BaseModal
  }
};
</script>

<style>
</style>