import {
  request
} from 'network/request'

export function getGeoData(address, city) {
  return request({
    method: 'post',
    url: '/v1/geocode/geo',
    data: {
      address,
      city
    }
  })
}

export function getRegeoData(bizType, latitude, longitude) {
  return request({
    method: 'post',
    url: '/v1/geocode/regeo',
    data: {
      bizType,
      latitude,
      longitude
    }
  })
}
