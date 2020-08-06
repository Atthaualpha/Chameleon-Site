<template>
  <div>
    <search-bar>
      <template v-slot:search>
        <input
          class="input is-info"
          type="text"
          v-model="projectName"
          placeholder="Project name"
          @change="searchProjects"
        />
      </template>
      <template v-slot:create>
        <button class="button is-info is-outlined" @click="openModal">
          <span>Create Project</span>
          <span class="icon is-small">
            <i class="fas fa-lightbulb"></i>
          </span>
        </button>
      </template>
    </search-bar>
    <new-project @created="searchProjects"></new-project>
    <div>
      <project-list :projectList="projectList"></project-list>
    </div>
  </div>
</template>

<script>
import BaseSearchBar from "../components/Base/BaseSearchBar";
import NewProject from "../components/projects/NewProject";
import ProjectList from "../components/projects/ProjectList";
import baseMixin from "../mixin/baseModalMixin";
import projectService from "../services/projects/projectService";

export default {
  data() {
    return {
      projectName: "",
      projectList: [],
    };
  },
  methods: {
    searchProjects() {
      projectService.searchProjects(
        {
          name: this.projectName,
        },
        (err, response) => {
          if (err) {
            console.log(err);
            return;
          }
          this.projectList = response.projects;
        }
      );
    },
    removeProject(projectId) {
      const index = this.projectList.findIndex(
        (project) => project._id == projectId
      );

      this.projectList.splice(index, 1);
    },
    updateProject(project) {
      const index = this.projectList.findIndex(
        (project) => project._id == project._id
      );

      this.projectList.splice(index, 1, project);
    },
  },
  components: {
    searchBar: BaseSearchBar,
    newProject: NewProject,
    projectList: ProjectList,
  },
  mixins: [baseMixin],
  created() {
    this.$bus.on("searchProjectList", this.searchProjects);
    this.$bus.on("projectUpdated", this.updateProject);
    this.$bus.on("projectDeleted", this.removeProject);
  },
  mounted() {
    this.searchProjects();
  },
};
</script>
  
<style>
</style>