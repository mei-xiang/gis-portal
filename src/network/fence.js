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

export function getFenceDeleteData(uuid) {
  return request({
    method: 'delete',
    url: '/v1/fence/delete',
    params: {
      uuid
    }
  })
}

export function getIntersectionData(fenceObj) {
  return request({
    method: 'post',
    url: '/v1/fence/is-intersection',
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

export function getUuidsData(fenceObj) {
  return request({
    method: 'post',
    url: '/v1/fence/is-point-in-uuids',
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

export function getSyncStatusData() {
  return request({
    method: 'post',
    url: '/v1/fence/sync-status'
  })
}

export function getUpdateStatusData(uuid, status) {
  return request({
    method: 'post',
    url: '/v1/fence/update-status',
    params: {
      uuid,
      status
    }
  })
}

export function getFenceUpsertData(fenceObj) {
  return request({
    method: 'post',
    url: '/v1/fence/upsert',
    data: fenceObj
  })
}
