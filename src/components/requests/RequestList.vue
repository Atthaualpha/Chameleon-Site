<template>
  <div>
    <transition-group name="request-list">
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
.request-list-enter-active,
.request-list-leave-active {
  transition: all 1s;
}
.request-list-enter,
.request-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>