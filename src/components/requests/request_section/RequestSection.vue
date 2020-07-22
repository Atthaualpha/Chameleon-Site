<template>
  <div>
    <base-tab>
      <template #tab-item>
        <base-tab-item
          :tab-title="'Params'"
          :tab-icon="'align-left'"
          :activeTab="activeTab"
          @click.native="changeTab('Params')"
        ></base-tab-item>
        <base-tab-item
          :tab-title="'Query'"
          :tab-icon="'sitemap'"
          :activeTab="activeTab"
          @click.native="changeTab('Query')"
        ></base-tab-item>
        <base-tab-item
          :tab-title="'Headers'"
          :tab-icon="'map'"
          :activeTab="activeTab"
          @click.native="changeTab('Headers')"
        ></base-tab-item>
        <base-tab-item
          :tab-title="'Body'"
          :tab-icon="'code'"
          :activeTab="activeTab"
          @click.native="changeTab('Body')"
        ></base-tab-item>
      </template>
    </base-tab>
    <keep-alive>
      <component :is="currentTab"></component>
    </keep-alive>
  </div>
</template>

<script>
import BaseTabs from "@/components/Base/BaseTabs";
import BaseTabItem from "@/components/Base/BaseTabItem";
import ParamSection from "../ParamSection";
import BodySection from "../BodySection";
export default {
  data() {
    return {
      activeTab: "Params",
      currentTab: "ParamSection"
    };
  },
  components: {
    baseTab: BaseTabs,
    baseTabItem: BaseTabItem,
    ParamSection: ParamSection,
    BodySection: BodySection
  },
  methods: {
    changeTab(tab) {
      this.activeTab = tab;
      if (tab == "Body") {
        this.currentTab = "BodySection";
      } else {
        this.currentTab = "ParamSection";
      }
    }
  }
};
</script>

<style>
</style>