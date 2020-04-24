import {
  request
} from './request'

export function getCarsData(carObj) {
  return request({
    method: 'post',
    url: '/v1/vehicle/cars',
    data: carObj
  })
}

export function getNearestCar(nearestCarObj) {
  return request({
    method: 'post',
    url: '/v1/vehicle/cars',
    data: nearestCarObj
  })
}
