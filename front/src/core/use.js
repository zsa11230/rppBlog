import Vue from 'vue'
import VueStorage from 'vue-ls'
import config from '@/config/defaultSettings'
import { openPage } from '@/utils/Url'
import './components_use'

import '@/styles/index.scss'

Vue.prototype.$openPage = openPage

Vue.use(VueStorage, config.storageOptions)
