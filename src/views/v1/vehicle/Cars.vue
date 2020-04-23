<template>
  <div class="geo">
    <!-- 面包屑 -->
    <!-- :to="{ path: '/v1/geocode/geo' }" -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>您现在的位置： 开发</el-breadcrumb-item>
      <el-breadcrumb-item>获取车辆信息</el-breadcrumb-item>
      <el-breadcrumb-item>附近车辆</el-breadcrumb-item>
    </el-breadcrumb>
    <h1 class="title">附近车辆</h1>
    <h2>接口使用说明</h2>
    <h3>附近车辆接口</h3>
    <h4>请求地址</h4>
    <p>http://192.168.44.152:8080/v1/vehicle/cars</p>
    <h4>请求方法</h4>
    <p>POST</p>
    <h4>请求</h4>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="param" label="参数"></el-table-column>
      <el-table-column prop="mean" label="含义"></el-table-column>
      <el-table-column prop="type" label="类型"></el-table-column>
      <el-table-column prop="request" label="是否必填"></el-table-column>
    </el-table>
    <h4>响应</h4>
    <div v-if="isRun===true">
      <p>Body</p>
      <pre>
      {
        "msg": "在线巡游中车辆",
        "code": 200,
        "data": null,
        "success": true,
        "exception": null,
        "attachment": null,
        "errCode": 200
      }
    </pre>
    </div>
    <button class="run" @click="run">运行</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isRun: false,
      tableData: [
        {
          param: 'executeOrderStatus',
          mean: '车辆上订单状态，0:空，1:满, 2:拼车',
          type: 'Integer',
          request: '必填'
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
          request: '必填'
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
          request: '必填'
        },
        {
          param: 'radius',
          mean: '范围半径【单位：米】',
          type: 'Integer',
          request: '必填'
        },
        {
          param: 'type',
          mean: '车辆类型',
          type: 'Integer',
          request: '必填'
        },
        {
          param: 'useLevelTypeList',
          mean: '1经济型 2舒适型 3行政型 4商务型 5尊贵型',
          type: 'Array[integer]',
          request: '必填'
        },
        {
          param: 'vehicleStatus',
          mean: '车辆状态信息 0-不显示 1-显示',
          type: 'Integer',
          request: '必填'
        }
      ]
    }
  },
  methods: {
    run() {
      this.isRun = true
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