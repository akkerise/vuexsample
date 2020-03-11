import * as mutations from './mutations'
import getters from './getters'
import * as actions from './actions'
import state from './state'

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
