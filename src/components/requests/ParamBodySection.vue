<template>
  <div>
    <div class="field my-0">
      <div class="column is-2 is-offset-10">
        <button
          class="button is-small is-primary is-outlined"
          @click="changeKeyValueEditMode"
        >key-value Edit</button>
      </div>
    </div>
    <hr class="my-0 has-background-primary" />
    <textarea class="textarea mt-1" placeholder="Rows separated by new lines" v-model="value"></textarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    changeKeyValueEditMode() {
      this.$emit("isKeyValueMode");
    }
  }
};
</script>

<style>
</style>