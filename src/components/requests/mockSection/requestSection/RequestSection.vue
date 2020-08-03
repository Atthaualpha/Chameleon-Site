<template>
  <div>
    <p class="menu-label has-text-weight-bold is-size-6">Request</p>
    <base-tabs>
      <template #tab-item>
        <base-tab-item
          :tab-title="'Query'"
          :tab-icon="'sitemap'"
          :activeTab="activeTab"
          @click.native="changeTab('Query')"
        >
          <template #bagde>
            <span class="badge is-top-left is-small">{{queryCount}}</span>
          </template>
        </base-tab-item>
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
        <base-tab-item
          :tab-title="'Body'"
          :tab-icon="'code'"
          :activeTab="activeTab"
          @click.native="changeTab('Body')"
        ></base-tab-item>
      </template>
    </base-tabs>
    <component :is="currentTab" :tabName="activeTab" :sectionType="'request'"></component>
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
      activeTab: "Query",
      currentTab: "ParamSection",
    };
  },
  computed: {
    queryCount() {
      return this.$store.getters["mockRequest/requestData"]("Query", "request")
        .length;
    },
    headerCount() {
      return this.$store.getters["mockRequest/requestData"](
        "Headers",
        "request"
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