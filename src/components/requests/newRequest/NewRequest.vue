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
            <input class="input" type="email" placeholder="Email" />
            <span class="icon is-small is-left">/</span>
          </p>
        </div>
      </div>
    </div>
    <div class="box">
      <request-section></request-section>
    </div>
    <div class="box">Request section</div>
  </div>
</template>

<script>
import RequestSection from "../request_section/RequestSection";
import RestMethodMixin from "@/mixin/restMethodMixin";
export default {
  mixins: [RestMethodMixin],
  components: {
    requestSection: RequestSection
  }
};
</script>

<style>
</style>