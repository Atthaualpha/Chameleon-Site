<template>
  <div>
    <request-mock v-for="request in requestList" :key="request.id" :request="request"></request-mock>
  </div>
</template>

<script>
import RequestMock from "./Request";
export default {
  data() {
    return {
      requestList: [
        { id: "1", method: "GET", status: 200 },
        { id: "2", method: "POST", status: 200 },
        { id: "3", method: "PUT", status: 200 },
        { id: "4", method: "DELETE", status: 200 },
        { id: "2", method: "POST", status: 200 },
        { id: "3", method: "PUT", status: 200 },
        { id: "4", method: "DELETE", status: 200 }
      ]
    };
  },
  components: {
    requestMock: RequestMock
  }
};
</script>

<style>
</style>