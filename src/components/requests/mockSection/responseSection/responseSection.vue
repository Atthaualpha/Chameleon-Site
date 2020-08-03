<template>
  <div>
    <p class="menu-label has-text-weight-bold is-size-6">Response</p>
    <div class="columns is-gapless">
      <div class="column is-10 is-inline-block">
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
      </div>
      <div class="column is-2 is-inline-block">
        <div class="columns is-gapless">
          <div class="column is-6">
            <label class="label">Status</label>
          </div>
          <div class="column is-6">
            <div class="select">
              <select v-model="status">
                <option
                  v-for="(status,i) in statusList"
                  :value="status.code"
                  :key="i"
                >{{status.code}} - {{status.name}}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <component :is="currentTab" :tabName="activeTab" :sectionType="'response'"></component>
  </div>
</template>

<script>
import BaseTabs from "@/components/Base/BaseTabs";
import BaseTabItem from "@/components/Base/BaseTabItem";
import ParamSection from "../parameters/ParamSection";
import BodySection from "../parameters/BodySection";
import restStatusMixin from "@/mixin/restStatusMixin";
export default {
  data() {
    return {
      activeTab: "Body",
      currentTab: "BodySection",
    };
  },
  computed: {
    status: {
      get() {
        return this.$store.getters["mockRequest/status"];
      },
      set(newStatus) {
        this.$store.commit("mockRequest/setStatus", newStatus);
      },
    },
    headerCount() {
      return this.$store.getters["mockRequest/requestData"](
        "Headers",
        "response"
      ).length;
    },
  },
  mixins: [restStatusMixin],
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