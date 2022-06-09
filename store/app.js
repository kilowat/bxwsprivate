export const state = () => ({
  sessid: null,
  polconfig: null,
  ws: null,
})

export const getters = {
  getWsUrl: state => {
    if (!state.polconfig) return false;
    const url = state.polconfig.result.result.configGet.server.websocket;
    const changels = state.result.result.configGet.channels;
    return url + '?CHANNEL_ID=' + changels.private.id + '/' + changels.shared.id + '&format=json';
  }
};

export const mutations = {
  setSessId(state, value) {
    state.sessid = value;
  },
  setPolConfig(state, value) {
    state.polconfig = value;
  },
  setWs(state, value) {
    state.ws = value;
  }
};
export const actions = {
  async fetchSessId({ commit }) {
    let { data } = await this.$axios.$get('/api/sessid');
    commit('setSessId', data);
  },
  async fetchPolconfig({state, commit }) {
    try {
      const params = new URLSearchParams();
      params.append('sessid', state.sessid);
      params.append('halt', state.sessid);
      params.append('cmd[serverTime]', 'server.time?');
      params.append('cmd[configGet]', 'pull.config.get?CACHE=N');
      let { result } = await this.$axios.$post('/rest/batch.json?logTag=pull.config', params);
      commit('setPolConfig', result);
    } catch (e) {
      console.log(e);
    }
  },
};