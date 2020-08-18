<template>
  <div>
    <transition-group name="list-animate">
      <request-mock       
        v-for="request in requestList"
        :key="request._id"
         @requestDeleted="removeRequest"
        :request="request"
      ></request-mock>
    </transition-group>
  </div>
</template>

<script>
import RequestMock from "./Request";
export default {
  props: {
    requestList: {
      type: Array,
      required: true,
    },
  },
  methods: {
    removeRequest(requestId) {
      const requestIndex = this.requestList.findIndex(
        (request) => request._id == requestId
      );
      this.requestList.splice(requestIndex, 1);
    },
  },
  components: {
    requestMock: RequestMock,
  },
};
</script>

<style>
</style>