import * as types from './mutation-types'

export default {
  [types.SET_SIDERBAR_COLLAPSED](state) {
    state.siderbar_collapsed = !state.siderbar_collapsed
  },
}
