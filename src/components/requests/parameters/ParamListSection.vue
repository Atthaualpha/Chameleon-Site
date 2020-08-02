<template>
  <div>
    <div class="field my-0">
      <div class="column is-2 is-inline-block has-text-weight-bold">Key</div>
      <div class="column is-8 is-inline-block has-text-weight-bold">Value</div>
      <div class="is-inline-block column is-2">
        <button class="button is-small is-success is-outlined" @click="changeFullEditMode">
          <span class="icon is-small">
            <i class="fas fa-code"></i>
          </span>
          <span>Full Edit</span>
        </button>
      </div>
    </div>
    <hr class="my-0 has-background-info" />
    <div>
      <div>
        <div class="field" v-for="(param,i) in paramList" :key="i">
          <param-item
            @itemChanged="saveParamList()"
            :param="param"
            :itemId="i"
            @itemDeleted="deleteItem"
          ></param-item>
          <hr class="my-0 has-background-light" />
        </div>
        <div class="field mt-1">
          <button class="button is-info is-outlined" style="width: 100%" @click="addParam">Add</button>
          <hr class="my-0 has-background-white" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ParamItem from "./ParamItem";
export default {
  props: ["tabName", "sectionType"],
  components: {
    ParamItem,
  },
  data() {
    return {
      newParam: {
        key: "",
        value: "",
      },
    };
  },
  computed: {
    paramList() {
      return this.$store.getters["newRequest/requestData"](
        this.tabName,
        this.sectionType
      );
    },
  },
  methods: {
    changeFullEditMode() {
      this.$emit("isFullMode");
    },
    saveParamList() {
      this.$store.commit("newRequest/setParameters", {
        tabName: this.tabName,
        sectionType: this.sectionType,
        parameters: this.paramList,
      });
      this.$store.commit("newRequest/buildBodyParams", {
        tabName: this.tabName,
        sectionType: this.sectionType,
      });
    },
    addParam() {
      this.paramList.push({
        key: "",
        value: "",
      });
      this.saveParamList();
    },
    deleteItem(itemId) {
      this.paramList.splice(itemId, 1);
      this.saveParamList();
    },
  },
};
</script>

<style>
</style>
