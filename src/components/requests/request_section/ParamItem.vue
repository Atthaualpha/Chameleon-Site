<template>
  <div @mouseenter="showDeleteBtn(true)" @mouseleave="showDeleteBtn(false)">
    <div class="column is-2 is-inline-block" @blur="isFocused = false" @focus="focusItem">
      <input
        type="text"
        class="input is-info is-small"
        v-model="param.key"
        @blur="isFocused = false"
        @focus="focusItem"
      />
    </div>
    <div class="column is-inline-block" :class="showDelete ? 'is-9' : 'is-10'">
      <input
        type="text"
        class="input is-info is-small"
        v-model="param.value"
        @blur="isFocused = false"
        @focus="focusItem"
      />
    </div>
    <div class="column is-1 is-inline-block" v-if="showDelete">
      <button class="button is-small is-danger is-outlined" @click="deleteItem">
        <i class="fas fa-times-circle"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["param", "itemId"],
  data() {
    return {
      isFocused: false,
      showDelete: false,
    };
  },
  methods: {
    showDeleteBtn(show) {
      if (!this.isFocused) {
        this.showDelete = show;
      }
    },
    deleteItem() {
      this.$emit("itemDeleted", this.itemId);
    },
    focusItem() {
      this.isFocused = true;
      this.showDelete = false;
    },
  },
};
</script>

<style>
</style>