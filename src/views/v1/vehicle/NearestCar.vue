<template>
  <div class="geo">
    <!-- 面包屑 -->
    <!-- :to="{ path: '/v1/geocode/geo' }" -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>api接入说明</el-breadcrumb-item>
      <el-breadcrumb-item>获取车辆信息</el-breadcrumb-item>
      <el-breadcrumb-item>最近车辆</el-breadcrumb-item>
    </el-breadcrumb>
    <h1 class="title">最近车辆</h1>
    <h2>接口使用说明</h2>
    <h3>最近车辆接口</h3>
    <h4>请求地址</h4>
    <p>http://192.168.44.152:8080/v1/vehicle/nearest-car</p>
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
import { getNearestCar } from 'network/vehicle'
export default {
  data() {
    return {
      isRun: false,
      tableData: [
        {
          param: 'executeOrderStatus',
          mean: '车辆上订单状态，0:空，1:满, 2:拼车',
          type: 'Integer',
          request: '选填'
        },
        {
          param: 'latitude',
          mean: '纬度',
          type: 'Number',
          request: '必填'
        },
        {
          param: 'limit',
          mean: '最多取多少辆',
          type: 'Integer',
          request: '选填'
        },
        {
          param: 'longitude',
          mean: '经度',
          type: 'Number',
          request: '必填'
        },
        {
          param: 'onlineStatus',
          mean: '司机登录上下线状态，0:下线，1:上线',
          type: 'Integer',
          request: '选填'
        },
        {
          param: 'radius',
          mean: '范围半径【单位：米】',
          type: 'Integer',
          request: '选填'
        },
        {
          param: 'type',
          mean: '车辆类型',
          type: 'Integer',
          request: '选填'
        },
        {
          param: 'useLevelTypeList',
          mean: '1经济型 2舒适型 3行政型 4商务型 5尊贵型',
          type: 'Array[integer]',
          request: '选填'
        },
        {
          param: 'vehicleStatus',
          mean: '车辆状态信息 0-不显示 1-显示',
          type: 'Integer',
          request: '选填'
        }
      ],
      exptableData: [
        {
          param: 'executeOrderStatus',
          value: 0,
          mean: '车辆上订单状态，0:空，1:满, 2:拼车',
          request: '选填'
        },
        {
          param: 'latitude',
          value: 0,
          mean: '纬度',
          request: '必填'
        },
        {
          param: 'limit',
          value: 0,
          mean: '最多取多少辆',
          request: '选填'
        },
        {
          param: 'longitude',
          value: 0,
          mean: '经度',
          request: '必填'
        },
        {
          param: 'onlineStatus',
          value: 0,
          mean: '司机登录上下线状态，0:下线，1:上线',
          request: '选填'
        },
        {
          param: 'radius',
          value: 0,
          mean: '范围半径【单位：米】',
          request: '选填'
        },
        {
          param: 'type',
          value: 0,
          mean: '车辆类型',
          request: '选填'
        },
        {
          param: 'useLevelTypeList',
          value: '[0]',
          mean: '1经济型 2舒适型 3行政型 4商务型 5尊贵型。如：[1,2,...]',
          request: '选填'
        },
        {
          param: 'vehicleStatus',
          value: 0,
          mean: '车辆状态信息 0-不显示 1-显示',
          request: '选填'
        }
      ],
      // 运行显示数据
      content: '',
      // 请求对象，通过class处理
      nearestCarObj: {}
    }
  },
  methods: {
    run() {
      this.isRun = true
      this.exptableData.forEach((item, index) => {
        if (item.param === 'useLevelTypeList') {
          this.nearestCarObj[item.param] = item.value
            ? JSON.parse(item.value)
            : []
        } else {
          this.nearestCarObj[item.param] = item.value
        }
      })
      // 通过类整合数据
      // this.nearestCarObj = new Condtion(this.exptableData)
      getNearestCar(this.nearestCarObj).then(res => {
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