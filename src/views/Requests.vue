<template>
  <div>
    <base-search-bar :has-filters="true">
      <template v-slot:search>
        <input
          class="input is-info"
          type="text"
          v-model="searchCriteria.name"
          @change="searchRequest"
          placeholder="Search Request"
        />
      </template>
      <template v-slot:search-filter>
        <div class="columns">
          <div class="column is-3 is-inline-block">
            <div class="select">
              <select v-model="searchCriteria.method" @change="searchRequest">
                <option value>Method</option>
                <option v-for="(method,i) in restMethods" :key="i" :value="method">{{method}}</option>
              </select>
            </div>
          </div>
          <div class="column is-2 is-inline-block">
            <div class="select">
              <select v-model="searchCriteria.status" @change="searchRequest">
                <option value>Status</option>
                <option
                  v-for="(status,i) in statusList"
                  :value="status.code"
                  :key="i"
                >{{status.code}} - {{status.name}}</option>
              </select>
            </div>
          </div>
        </div>
      </template>
      <template v-slot:create>
        <button class="button is-info is-outlined" @click="redirectCreateRequest">
          <span>Create Request</span>
          <span class="icon is-small">
            <i class="fas fa-paper-plane"></i>
          </span>
        </button>
      </template>
    </base-search-bar>
    <progress v-show="isLoading" class="progress is-small is-info" max="100">50%</progress>
    <request-list :requestList="requestList"></request-list>
  </div>
</template>

<script>
import RequestList from "../components/requests/RequestList";
import BaseSearchBar from "../components/Base/BaseSearchBar";
import RestMethodMixin from "../mixin/restMethodMixin";
import axios from "axios";
import requestService from "../services/requests/requestService";
import restStatusMixin from "@/mixin/restStatusMixin";
export default {
  data() {
    return {
      requestList: [],
      searchCriteria: {
        name: "",
        status: "",
        method: "",
      },
    };
  },
  computed: {
    isLoading() {
      return this.$store.getters["baseLoader/isLoading"];
    },
  },
  methods: {
    redirectCreateRequest() {
      this.$router.push({
        name: "NewRequest",
        params: { projectId: this.$route.params.projectId },
      });
    },
    searchRequest() {
      this.$store.commit("baseLoader/startLoading");
      requestService.searchRequestByProject(
        this.$route.params.projectId,
        this.searchCriteria,
        (err, res) => {
          if (err) {
            this.$store.dispatch("baseGrowl/open", {
              severity: "danger",
              message: "Error loading request",
            });
            return;
          }

          this.requestList = res.response.requestMocks;
          this.$store.commit("baseLoader/endLoading");
        }
      );
    },
  },
  mixins: [RestMethodMixin, restStatusMixin],
  components: {
    requestList: RequestList,
    baseSearchBar: BaseSearchBar,
  },
  created() {
    const methodQuery = this.$route.query.methodSelected;
    if (methodQuery) {
      this.searchCriteria.method = methodQuery;
    }
    this.searchRequest();
  },
};
</script>

<style>
</style>