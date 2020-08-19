<template>
  <div>
    <mock-request :title="'New Request'" :requestAction="createRequest" :title-action="'Save'"></mock-request>
  </div>
</template>

<script>
import MockRequest from "../mockSection/mockRequest";
import axios from "axios";
export default {
  beforeRouteEnter(to, from, next) {
    next((vm) => vm.$store.commit("mockRequest/clearRequest"));
  },
  methods: {
    createRequest() {
      this.$store.commit("baseLoader/startBtnLoading");
      const newRequest = this.$store.getters["mockRequest/request"];
      axios
        .post("/mock-request/" + this.$route.params.projectId, newRequest)
        .then((res) => {
          if (res.completed) {            
            this.$store.commit("mockRequest/clearRequest");
            this.$router.push({
              name: "RequestList",
              params: { projectId: this.$route.params.projectId },
            });            
            this.$store.dispatch("baseGrowl/open", {
              severity: "success",
              message: "Request created!",
            });
          }
          this.$store.commit("baseLoader/endBtnLoading");
        })
        .catch((err) => {
          const cause = err.response.cause;
          if (cause) {
            if (cause === "duplicated") {
              const requestId = err.response.requestIdDuplicated;
              console.log(requestId)
              this.$store.dispatch("baseGrowl/open", {
                severity: "danger",
                message: "Request duplicated: check url, query and headers <a href='/edit-request/"+requestId+"'>Go to request duplicated</a>",
                isHtml: true
              });
            }
          } else {
            this.$store.dispatch("baseGrowl/open", {
              severity: "danger",
              message: "Error creating the request",
            });
          }          
          this.$store.commit("baseLoader/endBtnLoading");
        });
    },
  },
  components: {
    MockRequest,
  },
};
</script>

<style>
</style>