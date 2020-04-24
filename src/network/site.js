import {
  request
} from 'network/request'

export function getByidData(uuid) {
  return request({
    method: 'post',
    url: '/v1/site/byid',
    params: {
      uuid
    }
  })
}

export function getCondtionData(condtionObj) {
  return request({
    method: 'post',
    url: '/v1/site/condtion',
    data: condtionObj
  })
}

/**
 * 直接数据遍历加到对象中，嵌套的特殊处理在添加就OK
 */
/**
 * 导出服务条件查询数据
 */
// export class Condtion {
//   constructor(exptableData) {
//     this.address = exptableData[0].value
//     this.areaCode = exptableData[1].value
//     this.city = exptableData[2].value
//     this.cityCode = exptableData[3].value
//     this.cityCodeList = JSON.parse(exptableData[4].value)
//     this.coordinate = JSON.parse(exptableData[5].value)
//     this.country = exptableData[6].value
//     this.createTime = exptableData[7].value
//     this.distance = Number(exptableData[8].value)
//     this.id = exptableData[9].value
//     this.lat = Number(exptableData[10].value)
//     this.lng = Number(exptableData[11].value)
//     this.name = exptableData[12].value
//     this.province = exptableData[13].value
//     this.status = Number(exptableData[14].value)
//     this.supplierId = exptableData[15].value
//     this.type = Number(exptableData[16].value)
//     this.typeList = JSON.parse(exptableData[17].value)
//     this.updateTime = exptableData[18].value
//     this.uuid = exptableData[19].value
//   }
// }

export function deleteData(id) {
  return request({
    method: 'delete',
    url: '/v1/site/delete',
    params: {
      id
    }
  })
}

export function getInsertSiteAllData(insertSiteObj) {
  return request({
    method: 'post',
    url: '/v1/site/insert-site-all',
    data: insertSiteObj
  })
}

// 导出批量保存站点信息数据
// export class InsertSiteAll {
//   constructor(exptableData) {
//     this.address = exptableData[0].value
//     this.areaCode = exptableData[1].value
//     this.city = exptableData[2].value
//     this.cityCode = exptableData[3].value
//     this.cityCodeList = JSON.parse(exptableData[4].value)
//     this.coordinate = JSON.parse(exptableData[5].value)
//     this.country = exptableData[6].value
//     this.createTime = exptableData[7].value
//     this.distance = Number(exptableData[8].value)
//     this.id = exptableData[9].value
//     this.lat = Number(exptableData[10].value)
//     this.lng = Number(exptableData[11].value)
//     this.name = exptableData[12].value
//     this.province = exptableData[13].value
//     this.status = Number(exptableData[14].value)
//     this.supplierId = exptableData[15].value
//     this.type = Number(exptableData[16].value)
//     this.typeList = JSON.parse(exptableData[17].value)
//     this.updateTime = exptableData[18].value
//     this.uuid = exptableData[19].value
//   }
// }

export function getPageData(pageObj) {
  return request({
    method: 'post',
    url: '/v1/site/page',
    data: pageObj
  })
}

// 导出分页查询数据
// export class Page {
//   constructor(exptableData) {
//     this.address = exptableData[0].value
//     this.areaCode = exptableData[1].value
//     this.city = exptableData[2].value
//     this.cityCode = exptableData[3].value
//     this.cityCodeList = JSON.parse(exptableData[4].value)
//     this.coordinate = JSON.parse(exptableData[5].value)
//     this.country = exptableData[6].value
//     this.createTime = exptableData[7].value
//     this.currentPage = parseInt(exptableData[8].value)
//     this.distance = Number(exptableData[9].value)
//     this.id = exptableData[10].value
//     this.lat = Number(exptableData[11].value)
//     this.lng = Number(exptableData[12].value)
//     this.name = exptableData[13].value
//     this.pageSize = parseInt(exptableData[14].value)
//     this.province = exptableData[15].value
//     this.status = Number(exptableData[16].value)
//     this.supplierId = exptableData[17].value
//     this.type = Number(exptableData[18].value)
//     this.typeList = JSON.parse(exptableData[19].value)
//     this.updateTime = exptableData[20].value
//     this.uuid = exptableData[21].value
//   }
// }

export function getSyncData(syncObj) {
  return request({
    method: 'post',
    url: '/v1/site/sync',
    data: syncObj
  })
}

export function getUpsertData(upsertObj) {
  return request({
    method: 'post',
    url: '/v1/site/upsert',
    data: upsertObj
  })
}
