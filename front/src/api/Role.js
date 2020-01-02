import request from '@/router/axios'

const prefix = '/roles'

export const getRoleList = () => {
  return request({
    url: `${prefix}/`,
    method: 'get',
  })
}

export const postRole = (data) => {
  return request({
    url: `${prefix}/`,
    method: 'post',
    data,
  })
}

export const patchRole = (data) => {
  return request({
    url: `${prefix}/${data.id}`,
    method: 'patch',
    data,
  })
}

export const getRoleById = (id) => {
  return request({
    url: `${prefix}/${id}`,
    method: 'get',
  })
}

export const deleteRoleById = (id) => {
  return request({
    url: `${prefix}/${id}`,
    method: 'delete',
  })
}
