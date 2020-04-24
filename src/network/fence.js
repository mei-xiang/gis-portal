import {
  request
} from './request'

export function getByidsData(uuids) {
  return request({
    method: 'post',
    url: '/v1/fence/byids',
    data: {
      uuids
    }
  })
}

export function getBypointData(fenceObj) {
  return request({
    method: 'post',
    url: '/v1/fence/bypoint',
    data: fenceObj
  })
}

export function getConditionData(fenceObj) {
  return request({
    method: 'post',
    url: '/v1/fence/condition',
    data: fenceObj
  })
}

export function getFenceDeleteData(fenceObj) {
  return request({
    method: 'delete',
    url: '/v1/fence/delete',
    data: fenceObj
  })
}

export function getFencePageData(fenceObj) {
  return request({
    method: 'post',
    url: '/v1/fence/page',
    data: fenceObj
  })
}

export function getFenceUpsertData(fenceObj) {
  return request({
    method: 'post',
    url: '/v1/fence/upsert',
    data: fenceObj
  })
}

export function getInConditionData(fenceObj) {
  return request({
    method: 'post',
    url: '/v1/fence/is-point-in-condition',
    data: fenceObj
  })
}

export function getIntersectionData(fenceObj) {
  return request({
    method: 'post',
    url: '/v1/fence/is-intersection',
    data: fenceObj
  })
}

export function getSyncStatusData(fenceObj) {
  return request({
    method: 'post',
    url: '/v1/fence/sync-status',
    data: fenceObj
  })
}

export function getUpdateStatusData(fenceObj) {
  return request({
    method: 'post',
    url: '/v1/fence/update-status',
    data: fenceObj
  })
}

export function getUuidsData(fenceObj) {
  return request({
    method: 'post',
    url: '/v1/fence/is-point-in-uuids',
    data: fenceObj
  })
}
