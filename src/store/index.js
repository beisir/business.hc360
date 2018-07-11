import Vuex from 'vuex'
import Vue from 'vue'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import user from './modules/user'


Vue.use(Vuex)
// console.log(user);
const state = {}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    user,
  }
})
