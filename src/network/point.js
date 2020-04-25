import {
  request
} from './request'

export function getLocationData(pointObj) {
  return request({
    method: 'post',
    url: '/v1/point/convert-to-gad-location',
    data: pointObj
  })
}

export function getPolygonData(pointObj) {
  return request({
    method: 'post',
    url: '/v1/point/is-point-in-polygon',
    data: pointObj
  })
}
