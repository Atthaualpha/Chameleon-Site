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
    <div>
      <div>
        <div class="field" v-for="(param,i) in paramList" :key="i">
          <param-item :param="param" :itemId="i" @itemDeleted="deleteItem"></param-item>
          <hr class="my-0 has-background-light" />
        </div>
        <div class="field mt-1">
          <button class="button is-primary is-outlined" style="width: 100%" @click="addParam">Add</button>
          <hr class="my-0 has-background-white" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import ParamItem from "./ParamItem";
export default {
  props: ["tabName", "dataRequest"],
  components: {
    ParamItem,
  },
  data() {
    return {
      newParam: {
        key: "",
        value: "",
      },
      paramList: this.dataRequest,
    };
  },
  watch: {
    dataRequest() {
      this.paramList = this.dataRequest;
    },
    paramList: {
      handler: function () {
        let newRequest = this.$store.getters["newRequest/request"];
        if (this.tabName === "Query") {
          newRequest.queryParams = this.paramList;
        } else if (this.tabName === "Headers") {
          newRequest.headers = this.paramList;
        }
        this.setRequest(newRequest);
      },
      deep: true,
    },
  },
  methods: {
    ...mapMutations("newRequest", ["setRequest"]),
    changeFullEditMode() {
      this.$emit("isFullMode");
    },
    addParam() {
      this.paramList.push({
        key: "",
        value: "",
      });
    },
    deleteItem(itemId) {
      this.paramList.splice(itemId, 1);
    },
  },
};
</script>

<style>
</style>
