<template>
  <div>
    <h1 class="title is-1 menu-label has-text-centered">Top Projects</h1>
    <div class>
      <transition-group name="list-animate">
        <div
          @mouseenter="selectProject(project)"
          class="column is-6 is-inline-block"
          v-for="project in projects"
          :key="project.projectId"
        >
          <router-link
            class="title is-3 menu-label selectable"
            :to="'/requests/'+project.projectId"
            tag="span"
          >{{project.projectName}}</router-link>
          <GChart
            :id="project.projectId"
            :settings="{ packages: ['corechart'] }"
            type="PieChart"
            :data="project.methods"
            :options="project.chartOptions"
            :events="chartEvents"
            :ref="'GCP'+project.projectId"
          ></GChart>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";
import reportService from "../services/reports/reports";
export default {
  name: "Home",
  data() {
    return {
      currentProject: "",
      projects: [],
      chartOptions: {
        legend: "none",
        width: 400,
        height: 400,
        chartArea: { width: "90%", height: "90%" },
        backgroundColor: "transparent",
        pieHole: 0.3,
        pieSliceText: "label",
        tooltip: {
          text: "value",
        },
      },
      chartEvents: {
        select: () => {
          const indexRow = this.$refs[
            "GCP" + this.currentProject.projectId
          ][0].chartObject.getSelection()[0].row;
          const methodSelected = this.$refs["GCP" + this.currentProject.projectId][0]
            .data[indexRow + 1];
          this.$router.push({
            path: "/requests/" + this.currentProject.projectId,
            query: { methodSelected: methodSelected[0], name: this.currentProject.projectName },
          });
        },
      },
    };
  },
  methods: {
    selectProject(project) {
      this.currentProject = project
    },
  },
  created() {
    reportService.findProjectReport((err, result) => {
      if (err) {
        return this.$store.dispatch("baseGrowl/open", {
          severity: "danger",
          message: "Error loading dashboard",
        });
      }
      this.projects = result;

      this.projects.forEach((project) => {
        project.methods.unshift(["name", "count"]);
        let colors = [];
        project.methods.forEach((method) => {
          if (method[0] == "GET") {
            colors.push("#23D160");
          }
          if (method[0] == "POST") {
            colors.push("#FFDD57");
          }
          if (method[0] == "PUT") {
            colors.push("#209CEE");
          }
          if (method[0] == "DELETE") {
            colors.push("#FF3860");
          }
        });
        project.chartOptions = {
          ...this.chartOptions,
          colors,
          pieSliceTextStyle: {
            color: project.methods.length > 2 ? "white" : "#7a7a7a",
            bold: true,
            fontSize: 16,
          },
        };
      });
    });
  },
  components: {
    GChart,
  },
};
</script>

<style scoped>
.selectable:hover {
  color: #3273dc;
}
.selectable {
  cursor: pointer;
}
</style>