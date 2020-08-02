<template>
  <div>
    <base-tabs>
      <template #tab-item>
        <base-tab-item
          :tab-title="'Body'"
          :tab-icon="'code'"
          :activeTab="activeTab"
          @click.native="changeTab('Body')"
        ></base-tab-item>
        <base-tab-item
          :tab-title="'Headers'"
          :tab-icon="'map'"
          :activeTab="activeTab"
          @click.native="changeTab('Headers')"
        >
          <template #bagde>
            <span class="badge is-top-left is-small">{{headerCount}}</span>
          </template>
        </base-tab-item>
      </template>
    </base-tabs>
    <component :is="currentTab" :tabName="activeTab" :sectionType="'response'"></component>
  </div>
</template>

<script>
import BaseTabs from "@/components/Base/BaseTabs";
import BaseTabItem from "@/components/Base/BaseTabItem";
import ParamSection from "../parameters/ParamSection";
import BodySection from "../parameters/BodySection";
export default {
  data() {
    return {
      activeTab: "Body",
      currentTab: "BodySection",
    };
  },
  computed: {
    headerCount() {
      return this.$store.getters["newRequest/requestData"](
        "Headers",
        "response"
      ).length;
    },
  },
  components: {
    BaseTabs,
    BaseTabItem,
    ParamSection,
    BodySection,
  },
  methods: {
    changeTab(tab) {
      this.activeTab = tab;
      if (tab == "Body") {
        this.currentTab = "BodySection";
      } else {
        this.currentTab = "ParamSection";
      }
    },
  },
};
</script>

<style>
</style>