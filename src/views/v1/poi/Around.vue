<template>
  <div class="geo">
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>API接入说明</el-breadcrumb-item>
      <el-breadcrumb-item>poi相关接口</el-breadcrumb-item>
      <el-breadcrumb-item>poi周边检索</el-breadcrumb-item>
    </el-breadcrumb>
    <h1 class="title">poi周边检索,暂不支持bizType为3,99</h1>
    <h2>接口使用说明</h2>
    <h3>poi周边检索接口</h3>
    <h4>请求地址</h4>
    <p>http://{{domainName}}:8080/v1/poi/around</p>
    <h4>请求方法</h4>
    <p>POST</p>
    <h4>请求</h4>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="param" label="参数"></el-table-column>
      <el-table-column prop="mean" label="含义"></el-table-column>
      <el-table-column prop="type" label="类型"></el-table-column>
      <el-table-column prop="request" label="是否必填"></el-table-column>
    </el-table>
        <ul style="padding-left: 18px;">
      <li style="list-style: disc;">
        <strong>服务示例</strong>
      </li>
    </ul>
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
import { DOMAIN_NAME } from 'common/const'
import { getAroundData } from 'network/poi'
export default {
  data() {
    return {
      isRun: false,
      domainName: DOMAIN_NAME,
      tableData: [
        {
          param: 'bizType',
          mean: '暂支持的业务类型：1，快享、专享 2，顺风车',
          type: 'Integer',
          request: '必填'
        },
        {
          param: 'cityCode',
          mean: '城市编码',
          type: 'String',
          request: '必填'
        },
        {
          param: 'limit',
          mean: '上下车点频次最高top',
          type: 'Integer',
          request: '选填'
        },
        {
          param: 'location',
          mean:
            'Point {lat (number, optional),lng (number, optional)}。坐标点，暂支持 bizType为1,2',
          type: 'Point',
          request: '必填'
        },
        {
          param: 'passengerId',
          mean: '乘客ID，暂支持 bizType为1',
          type: 'String',
          request: '选填'
        },
        {
          param: 'pointType',
          mean: '1：上车点 2： 下车点 暂支持 bizType为1',
          type: 'Integer',
          request: '选填'
        },
        {
          param: 'radius',
          mean: '范围半径【单位：米】 默认2km，当存在lng、lat参数时生效',
          type: 'Integer',
          request: '选填'
        }
      ],
      exptableData: [
        {
          param: 'bizType',
          value: 0,
          mean: '暂支持的业务类型：1，快享、专享 2，顺风车',
          request: '必填'
        },
        {
          param: 'cityCode',
          value: 'string',
          mean: '城市编码',
          request: '必填'
        },
        {
          param: 'limit',
          value: 0,
          mean: '上下车点频次最高top',
          request: '选填'
        },
        {
          param: 'location',
          value: '{"lat": 0,"lng": 0}',
          mean:
            'Point {lat (number, optional),lng (number, optional)}。坐标点，暂支持 bizType为1,2',
          request: '必填'
        },
        {
          param: 'passengerId',
          value: 'string',
          mean: '乘客ID，暂支持 bizType为1',
          request: '选填'
        },
        {
          param: 'pointType',
          value: 0,
          mean: '1：上车点 2： 下车点 暂支持 bizType为1',
          request: '选填'
        },
        {
          param: 'radius',
          value: 0,
          mean: '范围半径【单位：米】 默认2km，当存在lng、lat参数时生效',
          request: '选填'
        }
      ],
      // 运行显示数据
      content: '',
      // 请求对象，通过class处理
      condtionObj: {}
    }
  },
  methods: {
    run() {
      this.isRun = true
      this.exptableData.forEach((item, index) => {
        if (item.param === 'location') {
          this.condtionObj[item.param] = item.value
            ? JSON.parse(item.value)
            : {}
        } else {
          this.condtionObj[item.param] = item.value
        }
      })
      getAroundData(this.condtionObj).then(res => {
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