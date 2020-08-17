<template>
  <div>
    <mock-request :title="'Edit Request'" :requestAction="editRequest" :title-action="'Save'"></mock-request>
  </div>
</template>

<script>
import MockRequest from "../mockSection/mockRequest";
import requestService from "@/services/requests/requestService";
import axios from "axios";

export default {
  beforeRouteEnter(to, from, next) {
    requestService.searchRequestById(to.params.requestId, (err, res) => {
      next((vm) => vm.loadRequest(res.response));
    });
  },

  methods: {
    loadRequest(requestFound) {
      this.$store.commit("mockRequest/setRequest", requestFound);
    },
    editRequest() {
      const editedRequest = this.$store.getters["mockRequest/request"];
      axios
        .put("/mock-request/" + this.$route.params.requestId, editedRequest)
        .then((res) => {
          if (res.completed) {
            this.$store.commit("mockRequest/clearRequest");
            this.$router.push({
              name: "RequestList",
              params: { projectId: editedRequest.projectId },
            });
            this.$store.dispatch("baseGrowl/open", {
              severity: "info",
              message: "Request updated!",
            });
          }
        })
        .catch((err) => {
          const cause = err.response.cause;
          if (cause) {
            if (cause === "duplicated") {
              this.$store.dispatch("baseGrowl/open", {
                severity: "danger",
                message: "Request duplicated: check url, query and headers",
              });
            }
          }else{
            this.$store.dispatch("baseGrowl/open", {
                severity: "danger",
                message: "Error creating the request",
              });
          }
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