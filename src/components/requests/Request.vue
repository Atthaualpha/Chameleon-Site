<template>
  <div
    class="column is-6 is-inline-block selectable"
    @mouseenter="enterMethod"
    @mouseleave="leaveMethod"
    @click="redirectEditRequest"
  >
    <article class="panel has-background-white" :class="'is-'+methodColor">
      <p class="panel-heading has-text-white" :class="headColor">{{request.restMethod}}</p>
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
    </article>
  </div>
</template>

<script>
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
      return this.methodColors.find((color) => color[this.request.restMethod])[
        this.request.restMethod
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
        params: { requestId: this.request.id },
      });
    },
  },
};
</script>

<style>
.selectable {
  cursor: pointer;
}
</style>