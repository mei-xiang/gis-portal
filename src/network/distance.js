import {
  request
} from './request'

export function getMultiOrigin(distanceObj) {
  return request({
    method: 'post',
    url: '/v1/distance/multi-origin',
    data: distanceObj
  })
}

export function getQuery(distanceObj) {
  return request({
    method: 'post',
    url: '/v1/distance/query',
    data: distanceObj
  })
}
