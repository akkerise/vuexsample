import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import * as actions from './actions'
import * as mutations from './mutations'
import getters from './getters'
import todo from './modules/todo'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  modules: {
    todo
  }
})
