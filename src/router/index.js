import Vue from 'vue'
import VueRouter from 'vue-router'

// 首页
// const Index = () => import('views/Index')
// 中心介绍
const Introduce = () => import('views/introduce/Introduce')
// 案例文档
const Case = () => import('views/case/Case')
// 常见问题
const Flow = () => import('views/questions/Flow')
const Offset = () => import('views/questions/Offset')
const Node = () => import('views/questions/Node')

// 主模块
const Home = () => import('views/Home')
// 概要
const Summary = () => import('views/v1/summary/Summary')
// 指南
const Gettingstarted = () => import('views/v1/gettingstarted/Gettingstarted')
// 地理编码模块
const Geo = () => import('views/v1/geocode/Geo')
const Regeo = () => import('views/v1/geocode/Regeo')
// 服务健康检查
// const Health = () => import('views/v1/health/Health')
// 服务站相关
const Byid = () => import('views/v1/site/Byid')
const Condtion = () => import('views/v1/site/Condtion')
const Delete = () => import('views/v1/site/Delete')
const InsertSiteAll = () => import('views/v1/site/InsertSiteAll')
const Page = () => import('views/v1/site/Page')
const Sync = () => import('views/v1/site/Sync')
const Upsert = () => import('views/v1/site/Upsert')
// 获取车辆信息
const Cars = () => import('views/v1/vehicle/Cars')
const NearestCar = () => import('views/v1/vehicle/NearestCar')
// 距离计算
const MultiOrigin = () => import('views/v1/distance/MultiOrigin')
const Query = () => import('views/v1/distance/Query')
// 路径规划
const Compute = () => import('views/v1/route/Compute')
const DriveRoutePlan = () => import('views/v1/route/DriveRoutePlan')
const VehicleTrack = () => import('views/v1/route/VehicleTrack')
// 热力图统计
const QueryDisparity = () => import('views/v1/heatmap/QueryDisparity')
const QueryHeatmap = () => import('views/v1/heatmap/QueryHeatmap')
// 围栏相关接口
const Byids = () => import('views/v1/fence/Byids')
const Bypoint = () => import('views/v1/fence/Bypoint')
const Condition = () => import('views/v1/fence/Condition')
const FenceDelete = () => import('views/v1/fence/FenceDelete')
const InCondition = () => import('views/v1/fence/InCondition')
const Intersection = () => import('views/v1/fence/Intersection')
const FencePage = () => import('views/v1/fence/FencePage')
const SyncStatus = () => import('views/v1/fence/SyncStatus')
const UpdateStatus = () => import('views/v1/fence/UpdateStatus')
const FenceUpsert = () => import('views/v1/fence/FenceUpsert')
const Uuids = () => import('views/v1/fence/Uuids')
// 坐标相关接口
const Location = () => import('views/v1/point/Location')
const Polygon = () => import('views/v1/point/Polygon')
// poi相关接口
const Around = () => import('views/v1/poi/Around')
const CustomByid = () => import('views/v1/poi/CustomByid')
const CustomCondition = () => import('views/v1/poi/CustomCondition')
const Keyword = () => import('views/v1/poi/Keyword')
const PoiPage = () => import('views/v1/poi/Page')
const Switch = () => import('views/v1/poi/Switch')
const PoiUpsert = () => import('views/v1/poi/Upsert')

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/introduce',
  component: Introduce
},
{
  path: '/introduce',
  component: Introduce
},
{
  path: '/case',
  component: Case
},
// {
//   path: '/questions',
//   component: Questions
// },
{
  path: '/home',
  redirect: '/summary',
  // path: '/v1/geocode/geo',
  component: Home,
  children: [
    {
      path: '/summary',
      component: Summary
    },
    {
      path: '/gettingstarted',
      component: Gettingstarted
    },
    {
      path: '/v1/geocode/geo',
      component: Geo
    },
    {
      path: '/v1/geocode/regeo',
      component: Regeo
    },
    // {
    //   path: '/health',
    //   component: Health
    // },
    {
      path: '/v1/site/byid',
      component: Byid
    },
    {
      path: '/v1/site/condtion',
      component: Condtion
    },
    {
      path: '/v1/site/delete',
      component: Delete
    },
    {
      path: '/v1/site/insert-site-all',
      component: InsertSiteAll
    },
    {
      path: '/v1/site/page',
      component: Page
    },
    {
      path: '/v1/site/sync',
      component: Sync
    },
    {
      path: '/v1/site/upsert',
      component: Upsert
    },
    {
      path: '/v1/vehicle/cars',
      component: Cars
    },
    {
      path: '/v1/vehicle/nearest-car',
      component: NearestCar
    },
    {
      path: '/v1/distance/multi-origin',
      component: MultiOrigin
    },
    {
      path: '/v1/distance/query',
      component: Query
    },
    {
      path: '/v1/route/compute',
      component: Compute
    },
    {
      path: '/v1/route/drive-route-plan',
      component: DriveRoutePlan
    },
    {
      path: '/v1/route/vehicle-track',
      component: VehicleTrack
    },
    {
      path: '/v1/heatmap/query-disparity-heatmap-data',
      component: QueryDisparity
    },
    {
      path: '/v1/heatmap/query-heatmap-data',
      component: QueryHeatmap
    },
    {
      path: '/v1/fence/byids',
      component: Byids
    },
    {
      path: '/v1/fence/bypoint',
      component: Bypoint
    },
    {
      path: '/v1/fence/condition',
      component: Condition
    },
    {
      path: '/v1/fence/delete',
      component: FenceDelete
    },
    {
      path: '/v1/fence/is-intersection',
      component: Intersection
    },
    {
      path: '/v1/fence/is-point-in-condition',
      component: InCondition
    },
    {
      path: '/v1/fence/is-point-in-uuids',
      component: Uuids
    },
    {
      path: '/v1/fence/page',
      component: FencePage
    },
    {
      path: '/v1/fence/sync-status',
      component: SyncStatus
    },
    {
      path: '/v1/fence/update-status',
      component: UpdateStatus
    },
    {
      path: '/v1/fence/upsert',
      component: FenceUpsert
    },
    {
      path: '/v1/point/convert-to-gad-location',
      component: Location
    },
    {
      path: '/v1/point/is-point-in-polygon',
      component: Polygon
    },
    {
      path: '/v1/poi/around',
      component: Around
    },
    {
      path: '/v1/poi/custom/byid',
      component: CustomByid
    },
    {
      path: '/v1/poi/custom/count-by-condition',
      component: CustomCondition
    },
    {
      path: '/v1/poi/custom/page',
      component: PoiPage
    },
    {
      path: '/v1/poi/custom/status-switch',
      component: Switch
    },
    {
      path: '/v1/poi/custom/upsert',
      component: PoiUpsert
    },
    {
      path: '/v1/poi/keyword',
      component: Keyword
    },
    {
      path: '/questions/flow',
      component: Flow
    },
    {
      path: '/questions/offset',
      component: Offset
    },
    {
      path: '/questions/node',
      component: Node
    }
  ]
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
