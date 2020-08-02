<template>
  <div>
    <vue-json-editor v-model="jsonData" :show-btns="false" :mode="'code'" :modes="modes"></vue-json-editor>
  </div>
</template>

<script>
import vueJsonEditor from "vue-json-editor";
export default {
  props: ["sectionType"],
  data() {
    return {
      modes: ["code"],
    };
  },
  computed: {
    jsonData: {
      get() {
        return this.$store.getters["newRequest/body"](this.sectionType);
      },
      set(body) {
        this.$store.commit("newRequest/setBody", {
          sectionType: this.sectionType,
          body,
        });
      },
    },
  },
  components: {
    vueJsonEditor,
  },
};
</script>

<style>
</style>