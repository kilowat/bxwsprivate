export const state = () => ({
  user: {
    isAuthorized : false,
  }
})

export const getters = {
  getUser: state => {
    return state.user;
  }
};

export const mutations = {
  setUser(state, user) {
    state.user = user;
  }
};
export const actions = {
  async fetchUser({ commit }) {
    let { data } = await this.$axios.$get('/api/user');
    commit('setUser', data);
  },
};