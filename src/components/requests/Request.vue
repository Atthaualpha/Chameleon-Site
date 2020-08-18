<template>
  <div class="column is-6 is-inline-block">
    <article class="panel has-background-white" :class="'is-'+methodColor">
      <div class="panel-heading" :class="headColor">
        <div class="is-inline-block">
          <p class="has-text-white">{{request.method}}: {{request.name}}</p>
        </div>
        <div class="is-inline-block is-pulled-right">
          <div class="dropdown is-hoverable">
            <div class="dropdown-trigger">
              <span
                class="icon is-small selectable"
                aria-haspopup="true"
                :aria-controls="'request-options'+request._id"
              >
                <i class="fas fa-ellipsis-v has-text-white"></i>
              </span>
            </div>
            <div class="dropdown-menu is-small" :id="'request-options'+request._id" role="menu">
              <div class="dropdown-content">
                <a href="#" class="dropdown-item has-text-info" @click="copyApiUrl">
                  <i class="far fa-copy"></i>
                  Copy API Url
                </a>
                <a href="#" class="dropdown-item has-text-danger" @click="deleteRequest">
                  <i class="far fa-trash-alt"></i>
                  Delete
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="selectable"
        @click="redirectEditRequest"
        @mouseenter="enterMethod"
        @mouseleave="leaveMethod"
      >
        <div class="panel-block">
          <p>
            <span class="has-text-weight-bold">Url:</span>
            {{request.url}}
          </p>
        </div>
        <div class="panel-block">
          <p>
            <span class="has-text-weight-bold">Status:</span>
            {{request.status}}
          </p>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import requestService from "@/services/requests/requestService";
import axios from "axios";
export default {
  props: {
    request: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      methodColors: [
        { GET: "success" },
        { POST: "warning" },
        { PUT: "info" },
        { DELETE: "danger" },
      ],
      headColor: "",
    };
  },
  computed: {
    methodColor() {
      return this.methodColors.find((color) => color[this.request.method])[
        this.request.method
      ];
    },
    apiUrl() {
      return this.request.url;
    },
  },
  methods: {
    enterMethod() {
      this.headColor = "has-background-" + this.methodColor + "-dark";
    },
    leaveMethod() {
      this.headColor = "";
    },
    redirectEditRequest() {
      this.$router.push({
        name: "EditRequest",
        params: { requestId: this.request._id },
      });
    },
    copyApiUrl() {
      let inputCopy = document.createElement("input");
      inputCopy.value =
        axios.defaults.baseURL +
        this.$route.params.projectId +
        "/" +
        this.request.url;
      document.body.appendChild(inputCopy);
      inputCopy.select();
      if (document.execCommand("copy")) {
        this.$store.dispatch("baseGrowl/open", {
          severity: "success",
          message: "Url copied to clipboard!",
        });
      }
      document.body.removeChild(inputCopy);
    },
    async deleteRequest() {
      this.$store.commit("baseLoader/startLoading");
      requestService.deleteRequest(
        this.$route.params.projectId,
        this.request._id,
        (err, res) => {
          if (err || !res.completed) {
            this.$store.dispatch("baseGrowl/open", {
              severity: "danger",
              message: "Error deleting the request!",
            });
            this.$store.commit("baseLoader/endLoading");
            return;
          }

          this.$emit("requestDeleted", this.request._id);
          this.$store.dispatch("baseGrowl/open", {
            severity: "success",
            message: "Request deleted!",
          });
          this.$store.commit("baseLoader/endLoading");
        }
      );
    },
  },
};
</script>

<style>
.selectable {
  cursor: pointer;
}
</style>