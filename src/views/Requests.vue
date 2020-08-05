<template>
  <div>
    <base-search-bar :has-filters="true">
      <template v-slot:search>
        <input class="input is-info" type="text" placeholder="Search Request" />
      </template>
      <template v-slot:search-filter>
        <div class="columns">
          <div class="column is-3 is-inline-block">
            <div class="select">
              <select>
                <option value>Method</option>
                <option v-for="(method,i) in restMethods" :key="i" :value="method">{{method}}</option>
              </select>
            </div>
          </div>
          <div class="column is-3 is-inline-block">
            <div class="select">
              <select>
                <option value>Status</option>
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
    <request-list :requestList="requestList"></request-list>
  </div>
</template>

<script>
import RequestList from "../components/requests/RequestList";
import BaseSearchBar from "../components/Base/BaseSearchBar";
import RestMethodMixin from "../mixin/restMethodMixin";
import axios from "axios";
import requestService from "../services/requests/requestService";
export default {
  data() {
    return {
      requestList: [],
    };
  },
  components: {
    requestList: RequestList,
    baseSearchBar: BaseSearchBar,
  },
  mixins: [RestMethodMixin],

  beforeRouteEnter(to, from, next) {
    requestService.searchRequestByProject(to.params.projectId, (err, res) => {
      next((vm) => vm.setRequestList(res.response.requestMocks));
    });
  },

  methods: {
    setRequestList(resultList) {
      this.requestList = resultList;
    },
    redirectCreateRequest() {
      this.$router.push({
        name: "NewRequest",
        params: { projectId: this.$route.params.projectId },
      });
    },
  },
};
</script>

<style>
</style>