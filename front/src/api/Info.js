import request from '@/router/axios'

const prefix = '/infos'

export const getInfoById = (id) => {
  return request({
    url: `${prefix}/${id}`,
    method: 'get',
  })
}


export const getInfoList = () => {
  return request({
    url: `${prefix}/`,
    method: 'get',
  })
}

export const getInfoPage = (params) => {
  return request({
    url: `${prefix}/page`,
    method: 'get',
    params,
  })
}
