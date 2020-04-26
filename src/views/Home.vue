<template>
  <div>
    <gis-header class="header"></gis-header>
    <el-container class="home">
      <!-- 头部区域 GIS-PORTAL-->
      <!-- 内容区域 -->
      <el-container class="container">
        <el-aside width="230px">
          <!-- /v1/geocode/geo -->
          <el-menu
            :default-active="$route.path"
            class="el-menu-vertical-demo"
            background-color="#EEF3F6"
            text-color="#303133"
            active-text-color="#fff"
            unique-opened
            :router="true"
          >
            <el-menu-item index="/summary">
              <span slot="title">概述</span>
            </el-menu-item>

            <el-menu-item index="/gettingstarted">
              <span slot="title">指南</span>
            </el-menu-item>

            <el-submenu index="/v1/geocode">
              <template slot="title">
                <span>地理编码</span>
              </template>
              <el-menu-item index="/v1/geocode/geo">地理编码-地址转为将坐标</el-menu-item>
              <el-menu-item index="/v1/geocode/regeo">逆地理编码-将坐标转为地址</el-menu-item>
            </el-submenu>

            <!-- <el-submenu index="/health">
            <template slot="title">
              <span>服务健康检查</span>
            </template>
            <el-menu-item index="/health">服务健康</el-menu-item>
            </el-submenu>-->

            <el-submenu index="/v1/site">
              <template slot="title">
                <span>服务站相关</span>
              </template>
              <el-menu-item index="/v1/site/byid">查询详情</el-menu-item>
              <el-menu-item index="/v1/site/condtion">条件查询</el-menu-item>
              <el-menu-item index="/v1/site/delete">删除站点信息</el-menu-item>
              <el-menu-item index="/v1/site/insert-site-all">批量保存站点信息</el-menu-item>
              <el-menu-item index="/v1/site/page">分页查询</el-menu-item>
              <el-menu-item index="/v1/site/sync">同步服务站点信息到GIS</el-menu-item>
              <el-menu-item index="/v1/site/upsert">新增或修改站点</el-menu-item>
            </el-submenu>

            <el-submenu index="/v1/vehicle">
              <template slot="title">
                <span>获取车辆信息</span>
              </template>
              <el-menu-item index="/v1/vehicle/cars">附近车辆</el-menu-item>
              <el-menu-item index="/v1/vehicle/nearest-car">最近车辆</el-menu-item>
            </el-submenu>

            <el-submenu index="/v1/distance">
              <template slot="title">
                <span>距离计算</span>
              </template>
              <el-menu-item index="/v1/distance/multi-origin">批量距离计算</el-menu-item>
              <el-menu-item index="/v1/distance/query">距离计算</el-menu-item>
            </el-submenu>

            <el-submenu index="/v1/heatmap">
              <template slot="title">
                <span>热力图统计</span>
              </template>
              <el-menu-item index="/v1/heatmap/query-disparity-heatmap-data">获取运力差热力图统计数据</el-menu-item>
              <el-menu-item index="/v1/heatmap/query-heatmap-data">获取热力图统计数据</el-menu-item>
            </el-submenu>

            <el-submenu index="/v1/fence">
              <template slot="title">
                <span>围栏相关接口</span>
              </template>
              <el-menu-item index="/v1/fence/byids">批量获取电子围栏信息</el-menu-item>
              <el-menu-item index="/v1/fence/bypoint">匹配的围栏结果</el-menu-item>
              <el-menu-item index="/v1/fence/condition">根据条件查询所有的围栏</el-menu-item>
              <el-menu-item index="/v1/fence/delete">根据uuid删除围栏</el-menu-item>
              <el-menu-item index="/v1/fence/is-intersection">是否存在交集</el-menu-item>
              <el-menu-item index="/v1/fence/is-point-in-condition">返回围栏集合</el-menu-item>
              <el-menu-item index="/v1/fence/is-point-in-uuids">匹配的围栏结果</el-menu-item>
              <el-menu-item index="/v1/fence/page">分页获取围栏</el-menu-item>
              <el-menu-item index="/v1/fence/sync-status">同步更新全部围栏数据的状态</el-menu-item>
              <el-menu-item index="/v1/fence/update-status">更新围栏状态</el-menu-item>
              <el-menu-item index="/v1/fence/upsert">新增或修改围栏</el-menu-item>
            </el-submenu>

            <el-submenu index="/v1/route">
              <template slot="title">
                <span>行程相关</span>
              </template>
              <el-menu-item index="/v1/route/compute">批量接驾计算</el-menu-item>
              <el-menu-item index="/v1/route/drive-route-plan">驾车路径规划</el-menu-item>
              <el-menu-item index="/v1/route/vehicle-track">行驶路径规划计算</el-menu-item>
            </el-submenu>

            <el-submenu index="/v1/point">
              <template slot="title">
                <span>坐标相关接口</span>
              </template>
              <el-menu-item index="/v1/point/convert-to-gad-location">将GPS坐标转为高德坐标</el-menu-item>
              <el-menu-item index="/v1/point/is-point-in-polygon">坐标是否在指定多边形内</el-menu-item>
            </el-submenu>

            <el-submenu index="/v1/poi">
              <template slot="title">
                <span>poi相关接口</span>
              </template>
              <el-menu-item index="/v1/poi/around">poi周边检索</el-menu-item>
              <el-menu-item index="/v1/poi/custom/byid">查询详情</el-menu-item>
              <el-menu-item index="/v1/poi/custom/count-by-condition">根据条件查询数量</el-menu-item>
              <el-menu-item index="/v1/poi/custom/page">分页条件查询</el-menu-item>
              <el-menu-item index="/v1/poi/custom/status-switch">开启或者关闭</el-menu-item>
              <el-menu-item index="/v1/poi/custom/upsert">新增或者修改</el-menu-item>
              <el-menu-item index="/v1/poi/keyword">poi关键字检索</el-menu-item>
            </el-submenu>

            <el-menu-item index="/questions">
              <span slot="title">常见问题</span>
            </el-menu-item>

            <!-- <el-menu-item index="/download">
            <span slot="title">相关下载</span>
            </el-menu-item>-->
          </el-menu>
        </el-aside>
        <el-main>
          <!-- 路由出口 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import GisHeader from 'components/GisHeader'
export default {
  components: {
    GisHeader
  }
}
</script>

<style lang="less" scope>
.home {
  width: 100%;
  .header {
    width: 100%;
  }
  .el-header {
    // padding: 0;
  }
  .container {
    padding: 16px 0 16px 30px;
    .el-aside {
      .el-menu-item.is-active {
        background-color: #42a5f5 !important;
        color: #fff;
      }
      .el-submenu__title:hover {
        background-color: #45b7fe !important;
        color: #fff !important;
      }
      .el-menu-item:hover {
        background-color: #45b7fe !important;
        color: #fff !important;
      }
      .el-menu-item,
      .el-submenu__title {
        height: 38px;
        line-height: 38px;
        margin: 0 0 2px;
        border-bottom: 2px solid #fff;
      }
      .el-menu-item-group__title {
        font-size: 13px;
        line-height: 25px;
        padding: 0 0 0 23px;
        color: #bcbec1;
        margin-left: 0;
      }
      .el-menu-item-group li {
        color: #009cfa;
        border-bottom: none;
      }
      .el-menu-item-group .el-menu-item.is-active {
        color: #009cfa !important;
        background-color: #eef3f6 !important;
      }
      .el-menu-item-group .el-menu-item:hover {
        color: #1e88e5 !important;
        background-color: #eef3f6 !important;
      }
    }
  }
}
</style>
