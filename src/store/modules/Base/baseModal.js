const state = () => ({
  isActive: "",
});

const getters = {
  modalState(state) {
    return state.isActive;
  },
};

const mutations = {
  openModal(state) {
    state.isActive = "is-active";
  },
  closeModal(state) {
    state.isActive = "";
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
