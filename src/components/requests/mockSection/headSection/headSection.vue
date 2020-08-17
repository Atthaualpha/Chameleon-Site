<template>
  <div class="box">
    <div class="columns">
      <div class="column is-2 is-inline-block">
        <label class="label">Request Name</label>
      </div>
      <div class="column is-10 is-inline-block">
        <input type="text" class="input" placeholder="Name" v-model="name" />
      </div>
    </div>
    <div class="columns">
      <div class="column is-2 is-inline-block">
        <div class="select">
          <select v-model="method">
            <option v-for="(method,i) in restMethods" :key="i" :value="method">{{method}}</option>
          </select>
        </div>
      </div>
      <div class="column is-10 is-inline-block is-gapless">
        <div class="columns is-gapless">
          <div class="column is-11 is-inline-block">
            <div class="control has-icons-left">
              <input
                class="input"
                type="text"
                placeholder="Url"
                v-model="url"
                @change="urlChanged()"
              />
              <span class="icon is-small is-left">/</span>
            </div>
          </div>
          <div class="column is-1 is-inline-block">
            <button class="button is-success is-pulled-right is-outlined" :class="isLoading" @click="requestAction()">
              <slot name="title-action"></slot>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RestMethodMixin from "@/mixin/restMethodMixin";
export default {
  props: {
    requestAction: {
      type: Function,
      required: true,
    },
  },
  computed: {
     isLoading() {
      return this.$store.getters["baseLoader/isBtnLoading"] ? 'is-loading': '';
    },
    name: {
      get() {
        return this.$store.getters["mockRequest/name"];
      },
      set(name) {
        this.$store.commit("mockRequest/setName", name);
      },
    },
    method: {
      get() {
        return this.$store.getters["mockRequest/method"];
      },
      set(method) {
        this.$store.commit("mockRequest/setMethod", method);
      },
    },
    url: {
      get() {
        return this.$store.getters["mockRequest/url"];
      },
      set(newValue) {
        this.$store.commit("mockRequest/setUrl", newValue);
      },
    },
  },
  methods: {
    urlChanged() {
      this.$store.commit("mockRequest/buildParamListFromUrl", "request");
    },
  },
  mixins: [RestMethodMixin],
};
</script>

<style>
</style>