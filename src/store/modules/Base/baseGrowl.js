const state = () => ({
  isOpen: false,
  severity: "",
  message: "",
});

const mutations = {
  close(state) {
    state.isOpen = false;
  },
  open(state, { severity, message }) {
    state.isOpen = true;
    state.severity = severity;
    state.message = message;
  },
};

const actions = {
  open({commit},{ severity, message }){
    commit("open",{ severity, message })    
    setTimeout(() => {
      commit("close")
    },5000)
  }
}

const getters = {
  status(state) {
    return state.isOpen;
  },
  severity(state) {
    return state.severity;
  },
  message(state) {
    return state.message;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
