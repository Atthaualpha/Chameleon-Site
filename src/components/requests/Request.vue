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
                <i class="fas fa-ellipsis-v"></i>
              </span>
            </div>
            <div class="dropdown-menu" :id="'request-options'+request._id" role="menu">
              <div class="dropdown-content">
                <a href="#" class="dropdown-item has-text-danger" @click="deleteRequest">Delete</a>
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
    async deleteRequest() {
      requestService.deleteRequest(
        this.$route.params.projectId,
        this.request._id,
        (err, res) => {
          if (res.completed) {
            this.$emit("requestDeleted", this.request._id);
          }
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