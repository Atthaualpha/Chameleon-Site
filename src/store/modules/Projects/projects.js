import axios from "axios";

const state = () => ({
  projectList: [],
});

const mutations = {
  setProjectList(state, projectList) {
    state.projectList = projectList;
  },
};

const actions = {
  searchProjects({ commit }, queryParams) {
    axios
      .get("/project", { params: queryParams })
      .then((res) => {
        if (res.completed) {
          commit("setProjectList", res.response.projects);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  deleteProject({ dispatch }, payload) {
    axios
      .delete("/project/" + payload.projectId)
      .then((res) => {
        if (res.completed) {
          dispatch("searchProjects");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

const getters = {
  projectList(state) {
    return state.projectList;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
