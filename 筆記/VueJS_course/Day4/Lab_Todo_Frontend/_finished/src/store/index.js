import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName: "Guest"
  },
  getters: {
    helloUser: function (state) {
      return "Hello! " + state.userName;
    }
  },
  mutations: {
    updateUser(state, userName) {
      state.userName = userName
    }
  },
  actions: {
    login(context, userInfo) {
      if (!userInfo.password) {
        return;
      }
      context.commit('updateUser', userInfo.userName);
    }
  },
  modules: {
  }
})
