const state = () => ({
  isOpen: false,
  severity: "",
  message: "",
  isHtml: false,
});

const mutations = {
  close(state) {
    state.isOpen = false;
    state.severity = "";
    state.message = "";
    state.isHtml = false;
  },
  open(state, { severity, message, isHtml }) {
    state.isOpen = true;
    state.severity = severity;
    state.message = message;
    state.isHtml = isHtml;
  },
};

const actions = {
  open({ commit }, { severity, message, isHtml }) {
    commit("open", { severity, message, isHtml });
    setTimeout(() => {
      commit("close");
    }, 5000);
  },
};

const getters = {
  status(state) {
    return state.isOpen;
  },
  severity(state) {
    return state.severity;
  },
  message(state) {
    return state.message;
  },
  isHtml(state) {
    return state.isHtml;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
