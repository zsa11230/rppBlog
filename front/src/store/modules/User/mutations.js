import Vue from 'vue'
import * as types from './mutation-types'

export default {
  [types.SET_ACCESS_TOKEN] (state, access_token) {
    state.access_token = access_token
    Vue.ls.set(types.SET_ACCESS_TOKEN, access_token, 7 * 24 * 60 * 60 * 1000)
  },
  [types.CLEAR_ACCESS_TOKEN] (state) {
    state.access_token = ''
    Vue.ls.remove(types.SET_ACCESS_TOKEN)
  },
  [types.SET_ID] (state, id) {
    state.id = id
  },
  [types.SET_USERNAME] (state, username) {
    state.username = username
  },
}
