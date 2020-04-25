import {
  request
} from './request'

export function getAroundData(poiObj) {
  return request({
    method: 'post',
    url: '/v1/poi/around',
    data: poiObj
  })
}

export function getCustomByidData(poiId, poiBizTypeEnum) {
  return request({
    method: 'post',
    url: '/v1/poi/custom/byid',
    params: {
      poiId,
      poiBizTypeEnum
    }
  })
}

export function getCustomConditionData(poiObj) {
  return request({
    method: 'post',
    url: '/v1/poi/custom/count-by-condition',
    data: poiObj
  })
}

export function getKeywordData(poiObj) {
  return request({
    method: 'post',
    url: '/v1/poi/keyword',
    data: poiObj
  })
}

export function getPageData(poiObj) {
  return request({
    method: 'post',
    url: '/v1/poi/custom/page',
    data: poiObj
  })
}

export function getSwitchData(poiObj) {
  return request({
    method: 'post',
    url: '/v1/poi/custom/status-switch',
    data: poiObj
  })
}

export function getUpsertData(poiObj) {
  return request({
    method: 'post',
    url: '/v1/poi/custom/upsert',
    data: poiObj
  })
}
