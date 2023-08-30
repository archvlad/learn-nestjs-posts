import AuthService from '../services/auth.service';

const user = JSON.parse(localStorage.getItem('user'));

const initialState = user
  ? { status: { loggedIn: true }, user: user.user }
  : { status: { loggedIn: false }, user: null };

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    async login({ commit }, { username, password }) {
      let data = await AuthService.login(username, password);
      if (data.accessToken) {
        commit('loginSuccess', data.user);
      }
      return data;
    },
    logout({ commit }) {
      AuthService.logout();
      commit('logout');
    },
    async signup({ commit }, { username, password }) {
      let data = await AuthService.signup(username, password);
      if (data.accessToken) {
        commit('signupSuccess', data.user);
      }
      return data;
    },
  },
  mutations: {
    loginSuccess(state, user) {
      state.status.loggedIn = true;
      state.user = user;
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    signupSuccess(state, user) {
      state.status.loggedIn = true;
      state.user = user;
    },
    signupFailure(state) {
      state.status.loggedIn = false;
    },
  },
};
