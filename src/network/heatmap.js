import {
  request
} from './request'

export function getDisparityData(heatmapObj) {
  return request({
    method: 'post',
    url: '/v1/heatmap/query-disparity-heatmap-data',
    data: heatmapObj
  })
}

export function getHeatmapData(heatmapObj) {
  return request({
    method: 'post',
    url: '/v1/heatmap/query-heatmap-data',
    data: heatmapObj
  })
}
