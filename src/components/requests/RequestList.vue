<template>
  <div>
    <request-mock v-for="request in requestList" :key="request.id" :request="request"></request-mock>
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
  components: {
    requestMock: RequestMock,
  },
};
</script>

<style>
</style>