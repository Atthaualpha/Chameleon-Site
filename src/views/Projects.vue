<template>
  <div>
    <search-bar>
      <template v-slot:search>
        <div class="row">
          <div class="input-field">
            <i class="material-icons prefix">search</i>
            <input type="text" class="validate" placeholder="Search Project" />
          </div>
        </div>
      </template>
      <template v-slot:create>
        <button
          class="waves-effect waves-light btn modal-trigger input-field"
          data-target="new-project-modal"
        >
          Create Project
          <i class="material-icons right">lightbulb_outline</i>
        </button>
      </template>
    </search-bar>
    <new-project></new-project>
    <div class="col m12">
      <project-list></project-list>
    </div>
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar";
import NewProject from "../components/projects/NewProject";
import ProjectList from "../components/projects/ProjectList";

export default {
  components: {
    searchBar: SearchBar,
    newProject: NewProject,
    projectList: ProjectList
  }
};
</script>
  
<style>
</style>