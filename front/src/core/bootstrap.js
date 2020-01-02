import Vue from 'vue'
import store from '@/store/'
import * as types from '@/store/modules/User/mutation-types'
// import config from '@/config/defaultSettings'

export default function Initializer() {
  // console.log(`API_URL: ${process.env.VUE_APP_API_BASE_URL}`)
  store.commit('SET_ACCESS_TOKEN', Vue.ls.get(types.SET_ACCESS_TOKEN))
  // last step
}
