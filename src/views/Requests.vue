<template>
  <div>
    <base-search-bar>
      <template v-slot:search>
        <input class="input is-info" type="text" placeholder="Search Request" />
      </template>
      <template v-slot:create>
        <button class="button is-info">
          <span>Create Request</span>
          <span class="icon is-small">
            <i class="fas fa-paper-plane"></i>
          </span>
        </button>
      </template>
    </base-search-bar>
    <request-list></request-list>
  </div>
</template>

<script>
import RequestList from "../components/requests/RequestList";
import BaseSearchBar from "../components/Base/BaseSearchBar";
export default {
  components: {
    requestList: RequestList,
    baseSearchBar: BaseSearchBar
  }
};
</script>

<style>
</style>