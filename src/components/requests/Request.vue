<template>
  <div
    class="column is-6 is-inline-block selectable"
    @mouseenter="enterMethod"
    @mouseleave="leaveMethod"
  >
    <article class="panel has-background-white" :class="'is-'+methodColor">
      <p class="panel-heading has-text-white" :class="headColor">{{request.method}}</p>
      <div class="panel-block">Url</div>
      <div class="panel-block">Status: {{request.status}}</div>
    </article>
  </div>
</template>

<script>
export default {
  props: ["request"],
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
  },
};
</script>

<style>
.selectable {
  cursor: pointer;
}
</style>