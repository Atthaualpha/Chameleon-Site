<template>
  <div class="box">
    <div style="max-height: 320px; overflow: auto;">
      <component
        :is="currentSection"
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
  data() {
    return {
      currentSection: "paramListSection"
    };
  },
  components: {
    paramListSection: ParamListSection,
    paramBodySection: ParamBodySection
  }
};
</script>

<style>
</style>