<template>
  <div>
    <h1 class="title is-1 menu-label has-text-centered">{{title}}</h1>
    <head-section :requestAction="requestAction">
      <template #title-action>{{titleAction}}</template>
    </head-section>
    <div class="box">
      <request-section></request-section>
    </div>
    <div class="box">
      <response-section></response-section>
    </div>
  </div>
</template>

<script>
import HeadSection from "./headSection/headSection";
import RequestSection from "./requestSection/RequestSection";
import ResponseSection from "./responseSection/responseSection";
export default {
  props: {
    requestAction: {
      type: Function,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    titleAction: {
      type: String,
      required: true,
    },
  },
  components: {
    HeadSection,
    RequestSection,
    ResponseSection,
  },
};
</script>

<style>
</style>