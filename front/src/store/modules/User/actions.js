// import Vue from 'vue'
import * as types from './mutation-types'
import { postLogin, getUserInfo } from '@/api/User'

export const userLogin = async ({ commit, dispatch }, form) => {
  try {
    const { data } = await postLogin(form)
    commit(types.SET_ACCESS_TOKEN, data)
    await dispatch('userInfo')
    return data
  } catch (error) {
    console.log(error)
  }
}

export const userLogout = async ({ dispatch }) => {
  try {
    // TODO: LOGOUT request
    await dispatch('userClearInfo')
  } catch (error) {
    console.log(error)
  }
}

export const userInfo = async ({ commit }) => {
  try {
    const userInfo = (await getUserInfo()).data
    commit(types.SET_USERNAME, userInfo.username)
    commit(types.SET_ID, userInfo.id)
    return userInfo
  } catch (error) {
    console.log(error)
  }
}

export const userClearInfo = async ({ commit }) => {
  try {
    commit(types.SET_USERNAME, '')
    commit(types.SET_ID, '')
    commit(types.CLEAR_ACCESS_TOKEN)
  } catch (error) {
    console.log(error)
  }
}
