import { axiosHttp } from '@/util/http'
import { SETUSERINFO } from './mutationsType'
import { GETUSERINFO } from './actionsType'

export default {
  namespaced: true,
  state: {
    // 保存用户信息
    userInfo: {

    }
  },
  mutations: {
    // TODO: 这里可以保存用户信息
    [SETUSERINFO](state, opts) {
      state.userInfo = opts
    }
  },
  actions: {
    // TODO: 这里可以获取用户信息
    async [GETUSERINFO]({commit, state, rootState}, opts) {
      let result = await axiosHttp.get('../../../static/json/a.json')
      commit(SETUSERINFO, result.data)
    }
  }
}
