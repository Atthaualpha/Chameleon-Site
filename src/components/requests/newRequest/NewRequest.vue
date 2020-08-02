<template>
  <div>
    <mock-request :title="'New Request'" :requestAction="createRequest" :title-action="'Save'"></mock-request>
  </div>
</template>

<script>
import MockRequest from "../mockSection/mockRequest";
export default {
  methods: {
    createRequest() {
      console.log("Request created");
    },
  },
  components: {
    MockRequest,
  },
};
</script>

<style>
</style>