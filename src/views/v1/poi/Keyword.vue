<template>
  <div class="geo">
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>api接入说明</el-breadcrumb-item>
      <el-breadcrumb-item>poi相关接口</el-breadcrumb-item>
      <el-breadcrumb-item>poi关键字检索</el-breadcrumb-item>
    </el-breadcrumb>
    <h1 class="title">poi关键字检索,暂不支持bizType为2</h1>
    <h2>接口使用说明</h2>
    <h3>poi关键字检索</h3>
    <h4>请求地址</h4>
    <p>http://192.168.44.152:8080/v1/poi/keyword</p>
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
        no content
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
          param: 'address',
          mean: 'address',
          type: 'String',
          request: '必填'
        },
        {
          param: 'areaId',
          mean: '运营区域id，bizType为3时候生效',
          type: 'String',
          request: '必填'
        },
        {
          param: 'bizType',
          mean:
            '暂支持的业务类型：1，快享、专享 3，自动驾驶， 99，高德 ；默认为 1',
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
          request: '必填'
        },
        {
          param: 'passengerId',
          mean: '乘客ID，bizType为1时候生效',
          type: 'String',
          request: '必填'
        },
        {
          param: 'pointType',
          mean: '1：上车点 2： 下车点 bizType=1且address不为空时生效',
          type: 'Integer',
          request: '必填'
        },
        {
          param: 'types',
          mean:
            '查询POI类型,如15010：交通设施服务-机场相关 bizType为99时候生效',
          type: 'String',
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