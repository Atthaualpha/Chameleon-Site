<template>
  <div>
    <div class="field my-0">
      <div class="column is-10 is-inline-block has-text-weight-bold">Quick edit</div>
      <div class="column is-2 is-inline-block">
        <button class="button is-small is-success is-outlined" @click="changeKeyValueEditMode">
          <span class="icon is-small">
            <i class="fas fa-list"></i>
          </span>
          <span>key-value Edit</span>
        </button>
      </div>
    </div>
    <hr class="my-0 has-background-info" />
    <textarea
      class="textarea mt-1"
      placeholder="Rows separated by new lines"
      v-model="bodyParams"
      @change="buildParamList()"
    ></textarea>
  </div>
</template>

<script>
export default {
  props: ["tabName", "sectionType"],
  data() {
    return {};
  },
  computed: {
    bodyParams: {
      get() {
        return this.$store.getters["mockRequest/bodyParams"](
          this.tabName,
          this.sectionType
        );
      },
      set(newValue) {
        this.$store.commit("mockRequest/setBodyParams", {
          tabName: this.tabName,
          sectionType: this.sectionType,
          body: newValue,
        });
      },
    },
  },
  methods: {
    changeKeyValueEditMode() {
      this.$emit("isKeyValueMode");
    },
    buildParamList() {
      let paramList = [];
      if (this.bodyParams.length > 0) {
        let bodyItems = this.bodyParams.split("\n");
        bodyItems.forEach((param) => {
          let paramItem = {
            key: "",
            value: "",
          };
          let keyIndex = param.indexOf(":");
          if (keyIndex == -1) {
            paramItem.key = param;
          } else {
            paramItem.key = param.substring(0, keyIndex);
            paramItem.value = param.substring(keyIndex + 1);
          }
          paramList.push(paramItem);
        });
      }
      this.$store.commit("mockRequest/setParameters", {
        tabName: this.tabName,
        sectionType: this.sectionType,
        parameters: paramList,
      });
      this.$store.commit("mockRequest/buildBodyParams", {
        tabName: this.tabName,
        sectionType: this.sectionType,
      });
    },
  },
};
</script>

<style>
</style>