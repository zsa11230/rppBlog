import Vue from 'vue'
import NProgress from 'nprogress'
import router from '@/router/index'
import store from '@/store/index'
import * as types from '@/store/modules/User/mutation-types'
// import { Message } from 'element-ui'

NProgress.configure({ showSpinner: false })

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  const meta = to.meta || {}
  const access_token = Vue.ls.get(types.SET_ACCESS_TOKEN)
  // console.log(meta, access_token)
  if (access_token) {
    if (to.path === '/login') {
      next('/')
    } else {
      if (!store.state.User.username) {
        try {
          await store.dispatch('userInfo')
          if (!store.state.User.username) {
            next({ path: '/login' })
          } else {
            next({ ...to, replace: true })
          }
        } catch (error) {
          console.log(error)
          store.dispatch('userLogout').then(() => {
            next({ path: '/login' })
          })
        }
        console.log(store.state.User.username)
      } else {
        next()
      }
    }
  } else {
    if (meta.isAuth === false) {
      next()
    } else {
      next(`/login?redirect=${to.fullPath}`)
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
