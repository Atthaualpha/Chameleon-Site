<template>
  <div class="box">
    <div style="max-height: 320px; overflow: auto;">
      <component
        :is="currentSection"
        :sectionType="sectionType"
        :tabName="tabName"
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
  props: ["tabName", "sectionType"],
  data() {
    return {
      currentSection: "paramListSection",
    };
  },
  components: {
    paramListSection: ParamListSection,
    paramBodySection: ParamBodySection,
  },
};
</script>

<style>
</style>