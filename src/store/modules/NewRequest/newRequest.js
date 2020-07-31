const state = () => ({
  request: {
    name: "",
    method: "",
    url: "",
    queryParams: [],
    headers: [],
    body: "",
  },
});

const mutations = {
  setRequest(state, request) {
    state.request = request;
  },
};

const getters = {
  request(state) {
    return state.request;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
};
