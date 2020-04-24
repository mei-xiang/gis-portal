<template>
  <div class="geo">
    <!-- 面包屑 -->
    <!-- :to="{ path: '/v1/geocode/geo' }" -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>api接入说明</el-breadcrumb-item>
      <el-breadcrumb-item>地理编码</el-breadcrumb-item>
      <el-breadcrumb-item>地理编码-地址转为将坐标</el-breadcrumb-item>
    </el-breadcrumb>
    <h1 class="title">地理编码-地址转为将坐标（经纬度）</h1>
    <h2>接口使用说明</h2>
    <h3>地理编码-地址转为将坐标接口</h3>
    <h4>请求地址</h4>
    <p>http://192.168.44.152:8080/v1/geocode/geo</p>
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
    <el-table :data="ExptableData" border style="width: 100%" class="expTable">
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
import { getGeoData } from 'network/geocode'
export default {
  data() {
    return {
      isRun: false,
      tableData: [
        {
          param: 'address',
          mean: '地址',
          type: 'String',
          request: '必填'
        },
        {
          param: 'city',
          mean: '城市',
          type: 'String',
          request: '必填'
        }
      ],
      ExptableData: [
        {
          param: 'address',
          value: '北京市朝阳区阜通东大街6号',
          mean: '地址',
          request: '必填'
        },
        {
          param: 'city',
          value: '北京',
          mean: '城市',
          request: '必填'
        }
      ],
      // runData: {
      //   address: '北京市朝阳区阜通东大街6号',
      //   city: '北京'
      // },
      content: ''
    }
  },
  methods: {
    run() {
      this.isRun = true
      getGeoData(this.ExptableData[0].value, this.ExptableData[1].value).then(
        res => {
          this.content = res
        }
      )
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
  .expTable.el-table--border th {
    border: 1px solid #0e81e5;
    border-right-color: #3e9aea;
    height: 38px;
    line-height: 38px;
    background: #0e81e5;
    color: #fff;
    text-align: left;
    // padding: 9px 16px;
    white-space: nowrap;
  }
}
</style>