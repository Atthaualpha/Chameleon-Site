<template>
  <div>
    <h1 class="title is-1 menu-label has-text-centered">New Request</h1>
    <div class="box">
      <div class="field">
        <div class="column is-2 is-inline-block">
          <label class="label">Request Name</label>
        </div>
        <div class="column is-10 is-inline-block">
          <input type="text" class="input" placeholder="Name" />
        </div>
      </div>
      <div class="field">
        <div class="column is-2 is-inline-block">
          <div class="select">
            <select>
              <option v-for="(method,i) in restMethods" :key="i" :value="method">{{method}}</option>
            </select>
          </div>
        </div>
        <div class="column is-10 is-inline-block">
          <p class="control has-icons-left">
            <input class="input" type="text" placeholder="Url" v-model="url" @change="urlChanged()" />
            <span class="icon is-small is-left">/</span>
          </p>
        </div>
      </div>
    </div>
    <div class="box">
      <request-section></request-section>
    </div>
    <div class="box">
      <response-section></response-section>
    </div>
    <div class="has-text-centered">
      <button class="button is-success is-outlined">Save Request</button>
    </div>
  </div>
</template>

<script>
import RequestSection from "../requestSection/RequestSection";
import ResponseSection from "../responseSection/responseSection";
import RestMethodMixin from "@/mixin/restMethodMixin";
export default {
  computed: {
    name: {
      get() {
        return this.$store.getters["newRequest/name"];
      },
      set(name) {
        this.$store.commit("newRequest/setName", name);
      },
    },
    method: {
      get() {
        return this.$store.getters["newRequest/method"];
      },
      set(method) {
        this.$store.commit("newRequest/setMethod", method);
      },
    },
    url: {
      get() {
        return this.$store.getters["newRequest/url"];
      },
      set(newValue) {
        this.$store.commit("newRequest/setUrl", newValue);
      },
    },
  },
  methods: {
    urlChanged() {
      this.$store.commit("newRequest/buildParamListFromUrl", "request");
    },
  },
  mixins: [RestMethodMixin],
  components: {
    RequestSection,
    ResponseSection,
  },
};
</script>

<style>
</style>