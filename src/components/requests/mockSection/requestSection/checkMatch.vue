<template>
  <div class="field my-1">
    <input
      id="switchRoundedOutlinedDefault"
      type="checkbox"
      name="switchRoundedOutlinedDefault"
      class="switch is-rounded is-outlined is-rtl"
      v-model="exactMatch"
    />
    <label for="switchRoundedOutlinedDefault" class="label">Exact Match:</label>
  </div>
</template>

<script>
export default {
  props: ["tabName"],
  computed: {
    exactMatch: {
      get() {
        return this.$store.getters["mockRequest/exactMatch"](this.tabName);
      },
      set(checked) {
          console.log("entro",checked)
        return this.$store.commit("mockRequest/setExactMatch", {
          tabName: this.tabName,
          checked,
        });
      },
    },
  }
};
</script>

<style>
</style>