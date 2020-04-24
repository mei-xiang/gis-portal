<template>
  <div class="geo">
    <!-- 面包屑 -->
    <!-- :to="{ path: '/v1/geocode/geo' }" -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>api接入说明</el-breadcrumb-item>
      <el-breadcrumb-item>距离计算</el-breadcrumb-item>
      <el-breadcrumb-item>批量距离计算</el-breadcrumb-item>
    </el-breadcrumb>
    <h1 class="title">批量距离计算</h1>
    <h2>接口使用说明</h2>
    <h3>批量距离计算接口</h3>
    <h4>请求地址</h4>
    <p>http://192.168.44.152:8080/v1/distance/multi-origin</p>
    <h4>请求方法</h4>
    <p>POST</p>
    <h4>请求</h4>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="param" label="参数"></el-table-column>
      <el-table-column prop="mean" label="含义"></el-table-column>
      <el-table-column prop="type" label="类型"></el-table-column>
      <el-table-column prop="request" label="是否必填"></el-table-column>
    </el-table>
    <p>服务实例</p>
    <el-table :data="exptableData" border style="width: 100%" class="expTable">
      <el-table-column prop="param" label="参数"></el-table-column>
      <el-table-column label="值">
        <template slot-scope="scope">
          <el-input v-model="scope.row.value"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="mean" label="含义"></el-table-column>
      <el-table-column prop="request" label="是否必填"></el-table-column>
    </el-table>
    <h4>响应</h4>
    <button class="run" @click="run" style="margin: 10px 0">运行</button>
    <div v-if="isRun===true" style="height: 200px;overflow:auto;border:1px solid #ccc">
      <pre>{{content}}</pre>
    </div>
  </div>
</template>

<script>
import { getMultiOrigin } from 'network/distance'
export default {
  data() {
    return {
      isRun: false,
      tableData: [
        {
          param: 'destinationLag',
          mean: '目的地 纬度度 经纬度小数点不超过6位',
          type: 'Number',
          request: '必填'
        },
        {
          param: 'destinationLng',
          mean: '目的地 经度 经纬度小数点不超过6位',
          type: 'Number',
          request: '必填'
        },
        {
          param: 'originList',
          mean:
            '批量出发地到同一目的地,最多100个,上面的单个出发地不传。Coordinate {lat (number, optional),lng (number, optional)}',
          type: 'Array[Coordinate]',
          request: '必填'
        },
        {
          param: 'originsLag',
          mean: '出发点 纬度',
          type: 'Number',
          request: '必填'
        },
        {
          param: 'originsLng',
          mean: '出发点 经度',
          type: 'Number',
          request: '必填'
        },
        {
          param: 'type',
          mean:
            '类型 0：直线距离 1：驾车导航距离（仅支持国内坐标）必须指出，当为1时会考虑路况，故在不同时间请求返回结果可能不同。此策略和驾车路径规划接口的 strategy=4策略基本一致，策略为“ 躲避拥堵的路线，但是可能会存在绕路的情况，耗时可能较长。若需要实现高德地图客户端效果，可以考虑使用驾车路径规划接口 2：公交规划距离（仅支持同城坐标,QPS不可超过1，否则可能导致意外） 3：步行规划距离（仅支持5km之间的距离）',
          type: 'Integer',
          request: '必填'
        }
      ],
      exptableData: [
        {
          param: 'destinationLag',
          value: 0,
          mean: '目的地 纬度度 经纬度小数点不超过6位',
          request: '必填'
        },
        {
          param: 'destinationLng',
          value: 0,
          mean: '目的地 经度 经纬度小数点不超过6位',
          request: '必填'
        },
        {
          param: 'originList',
          value: '[{"lat": 0,"lng": 0}]',
          mean:
            '批量出发地到同一目的地,最多100个,上面的单个出发地不传。Coordinate {lat (number, optional),lng (number, optional)}。如：[{"lat": 0,"lng": 0}]',
          request: '必填'
        },
        {
          param: 'originsLag',
          value: 0,
          mean: '出发点 纬度',
          request: '必填'
        },
        {
          param: 'originsLng',
          value: 0,
          mean: '出发点 经度',
          request: '必填'
        },
        {
          param: 'type',
          value: 0,
          mean:
            '类型 0：直线距离 1：驾车导航距离（仅支持国内坐标）必须指出，当为1时会考虑路况，故在不同时间请求返回结果可能不同。此策略和驾车路径规划接口的 strategy=4策略基本一致，策略为“ 躲避拥堵的路线，但是可能会存在绕路的情况，耗时可能较长。若需要实现高德地图客户端效果，可以考虑使用驾车路径规划接口 2：公交规划距离（仅支持同城坐标,QPS不可超过1，否则可能导致意外） 3：步行规划距离（仅支持5km之间的距离）',
          request: '必填'
        }
      ],
      // 运行显示数据
      content: '',
      // 请求对象，通过class处理
      distanceObj: {}
    }
  },
  methods: {
    run() {
      this.isRun = true
      this.exptableData.forEach((item, index) => {
        if (item.param === 'originList') {
          this.distanceObj[item.param] = JSON.parse(item.value)
        } else {
          this.distanceObj[item.param] = item.value
        }
      })
      // 通过类整合数据
      // this.distanceObj = new Condtion(this.exptableData)
      getMultiOrigin(this.distanceObj).then(res => {
        this.content = res
      })
    }
  }
}
</script>

<style lang="less" sope>
.geo {
  color: #767676;
  h1 {
    position: relative;
    font-size: 24px;
    color: #292929;
    padding: 20px 0 0;
    background-repeat: no-repeat;
    background-position: 0 37px;
    line-height: 1;
    font-weight: 400;
    border-top: 1px solid #e7e7e7;
  }
  h2 {
    font-size: 18px;
    font-weight: 400;
    color: #3c3d3f;
    line-height: 1;
    margin: 0 0 20px;
    padding: 30px 0 20px;
    border: 0;
    border-bottom: 1px solid #e7e7e7;
  }
  h3 {
    margin: 10px 0;
    font-size: 16px;
    line-height: 2;
  }
  h4 {
    font-size: 16px;
    line-height: 2;
  }
  p {
    color: #767676;
    margin: 5px 0;
    line-height: 2;
    overflow-x: hidden;
    word-break: break-all;
  }
  .el-table {
    margin: 10px 0;
  }
  .run {
    line-height: 40px;
    color: #fff;
    outline: 0;
    cursor: pointer;
    border: none;
    padding: 0 30px;
    font-size: 16px;
    border-radius: 2px;
    background-color: #0e81e5;
    margin-right: 10px;
  }
}
</style>