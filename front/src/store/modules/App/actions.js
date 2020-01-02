import * as types from './mutation-types'
import { postLogin } from '@/api/User'

export const userLogin = async ({ commit }, form) => {
  try {
    const { data } = await postLogin(form)
    commit(types.SET_ACCESS_TOKEN, data.data)
    return data
  } catch (error) {
    console.log(error)
  }
}
