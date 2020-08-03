<template>
  <div>
    <search-bar>
      <template v-slot:search>
        <input class="input is-info" type="text" placeholder="Project name" />
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
    <new-project></new-project>
    <div>
      <project-list></project-list>
    </div>
  </div>
</template>

<script>
import BaseSearchBar from "../components/Base/BaseSearchBar";
import NewProject from "../components/projects/NewProject";
import ProjectList from "../components/projects/ProjectList";
import baseMixin from "../mixin/baseModalMixin";

export default {
  components: {
    searchBar: BaseSearchBar,
    newProject: NewProject,
    projectList: ProjectList,
  },
  mixins: [baseMixin],
};
</script>
  
<style>
</style>