const state = () => ({
  currentProject: {
    id: "",
    name: "",
  },
  currentRequest: {
    id: "",
    name: "",
  },
});

const mutations = {
  setProject(state, { id, name }) {
    state.currentProject.id = id;
    state.currentProject.name = name;
  },
  clearProject(state) {
    state.currentProject.id = "";
    state.currentProject.name = "";
  },
};

const getters = {
  currentProject(state) {
    return state.currentProject;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
};
