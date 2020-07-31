<template>
  <div class="box">
    <div style="max-height: 320px; overflow: auto;">
      <component
        :is="currentSection"
        :tabName="tabName"
        :dataRequest="dataRequest"
        @isFullMode="currentSection = 'paramBodySection'"
        @isKeyValueMode="currentSection = 'paramListSection'"
      ></component>
    </div>
  </div>
</template>

<script>
import ParamListSection from "./ParamListSection";
import ParamBodySection from "./ParamBodySection";
export default {
  props: ["tabName"],
  data() {
    return {
      dataRequest: null,
      currentSection: "paramListSection",
    };
  },
  watch: {
    tabName() {
      this.searchDataRequest();
    },
  },
  components: {
    paramListSection: ParamListSection,
    paramBodySection: ParamBodySection,
  },
  methods: {
    searchDataRequest() {
      const newRequest = this.$store.getters["newRequest/request"];
      if (this.tabName === "Query") {
        this.dataRequest = newRequest.queryParams || [];
        console.log(this.tabName);
      } else if (this.tabName === "Headers") {
        this.dataRequest = newRequest.headers || [];
        console.log(this.tabName);
      } else if (this.tabName === "Body") {
        this.dataRequest = newRequest.body;
      }
    },
  },
  created() {
    this.searchDataRequest();
  },
};
</script>

<style>
</style>