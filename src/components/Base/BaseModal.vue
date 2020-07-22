<template>
  <div class="modal" :class="modalState">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="modal-card">
        <header class="modal-card-head has-background-info">
          <p class="modal-card-title has-text-white">
            <slot name="md-title"></slot>
          </p>
          <button class="delete" aria-label="close" @click="closeModal"></button>
        </header>
        <section class="modal-card-body">
          <slot name="md-body"></slot>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click="mainAction">Create Project</button>
          <button class="button is-danger" @click="closeModal">Cancel</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import baseMixin from "@/mixin/baseModalMixin";
export default {
  mixins: [baseMixin],
  methods: {
    mainAction() {
      this.$emit("mainAction");
    }
  }
};
</script>

<style>
</style>