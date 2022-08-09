import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const actions = {
  login(minStore,userId){
    console.log(minStore,userId);
    minStore.commit('LOGIN',userId);
  }
}

const mutations = {
  LOGIN(state,userId){
    console.log(state,userId);
    state.isLogin = true;
  },
  QUIT(state){
    state.isLogin = false;
  }
}

const state = {
  userInfo:{},
  isLogin:false,
  toAppStatus:true,
  toAppPaused:false,
  toAppRun:false,
}

export default new Vuex.Store({
  actions,
  mutations,
  state
})