import {
  request
} from './request'

export function getComputeData(key, map) {
  return request({
    method: 'post',
    url: '/v1/route/compute',
    data: {
      key,
      map
    }
  })
}

export function getDriveRoutePlanData(routeObj) {
  return request({
    method: 'post',
    url: '/v1/route/drive-route-plan',
    data: routeObj
  })
}

export function getVehicleTrackData(routeObj) {
  return request({
    method: 'post',
    url: '/v1/route/vehicle-track',
    data: routeObj
  })
}
