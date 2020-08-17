const state = () => ({
  isLoading: false,
  isButtonLoading: false,
});

const mutations = {
  startLoading(state) {
    state.isLoading = true;
  },
  endLoading(state) {
    state.isLoading = false;
  },
  startBtnLoading(state) {
    state.isButtonLoading = true;
  },
  endBtnLoading(state) {
    state.isButtonLoading = false;
  },
};

const getters = {
  isLoading(state) {
    return state.isLoading;
  },
  isBtnLoading(state) {
    return state.isButtonLoading;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
};
