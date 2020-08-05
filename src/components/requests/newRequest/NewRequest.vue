<template>
  <div>
    <mock-request :title="'New Request'" :requestAction="createRequest" :title-action="'Save'"></mock-request>
  </div>
</template>

<script>
import MockRequest from "../mockSection/mockRequest";
import axios from "axios";
export default {
  methods: {
    createRequest() {
      const newRequest = this.$store.getters["mockRequest/request"];
      axios
        .post("/mock-request/" + this.$route.params.projectId, newRequest)
        .then((res) => {
          if (res.completed) {
            console.log(res);
            this.$store.commit("mockRequest/clearRequest");
          }
        })
        .catch((err) => console.log(err));
    },
  },
  components: {
    MockRequest,
  },
};
</script>

<style>
</style>