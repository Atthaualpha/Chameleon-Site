<template>
  <div>
    <div class="field my-0">
      <div class="column is-2 is-inline-block has-text-weight-bold">Key</div>
      <div class="column is-8 is-inline-block has-text-weight-bold">Value</div>
      <div class="is-inline-block column is-2">
        <button class="button is-small is-primary is-outlined" @click="changeFullEditMode">Full Edit</button>
      </div>
    </div>
    <hr class="my-0 has-background-primary" />
    <div class="has-background-light">
      <div>
        <div class="field" v-for="v in 10">
          <div class="column is-2 is-inline-block">
            <input type="text" class="input is-info is-small" placeholder="Key" />
          </div>
          <div class="column is-10 is-inline-block">
            <input type="text" class="input is-info is-small" placeholder="Value" />
          </div>
          <hr class="my-0 has-background-white" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    changeFullEditMode() {
      this.$emit("isFullMode");
    }
  }
};
</script>

<style>
</style>
