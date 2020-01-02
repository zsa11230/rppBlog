import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

import User from './modules/User/'
import App from './modules/App/'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    User,
    App,
  },
  getters,
})
