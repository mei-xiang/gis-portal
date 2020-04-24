<template>
  <div class="geo">
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>api接入说明</el-breadcrumb-item>
      <el-breadcrumb-item>行程相关</el-breadcrumb-item>
      <el-breadcrumb-item>驾车路径规划</el-breadcrumb-item>
    </el-breadcrumb>
    <h1 class="title">驾车路径规划</h1>
    <h2>接口使用说明</h2>
    <h3>驾车路径规划接口</h3>
    <h4>请求地址</h4>
    <p>http://192.168.44.152:8080/v1/route/drive-route-plan</p>
    <h4>请求方法</h4>
    <p>POST</p>
    <h4>请求</h4>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="param" label="参数"></el-table-column>
      <el-table-column prop="mean" label="含义"></el-table-column>
      <el-table-column prop="type" label="类型"></el-table-column>
      <el-table-column prop="request" label="是否必填"></el-table-column>
    </el-table>
    <p>Location对象参数</p>
    <el-table :data="tableData1" border style="width: 100%">
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
          param: 'cartype',
          mean: '0：普通汽车(默认值) 1：纯电动车 2：插电混动车',
          type: 'Integer',
          request: '必填'
        },
        {
          param: 'destination',
          mean: '目的地',
          type: 'Location',
          request: '必填'
        },
        {
          param: 'ferry',
          mean:
            '在路径规划中，是否使用轮渡，默认 0 0:使用渡轮(默认) 1:不使用渡轮',
          type: 'Integer',
          request: '必填'
        },
        {
          param: 'number',
          mean:
            '填入除省份及标点之外，车牌的字母和数字（需大写）。用于判断限行相关。(例如：A12345)',
          type: 'String',
          request: '必填'
        },
        {
          param: 'origin',
          mean: '出发点',
          type: 'Location',
          request: '必填'
        },
        {
          param: 'province',
          mean: '用汉字填入车牌省份缩写，用于判断是否限行，（例如：京）',
          type: 'String',
          request: '必填'
        },
        {
          param: 'roadaggregation',
          mean:
            '是否返回路径聚合信息，默认 false。false:不返回路径聚合信息;true:返回路径聚合信息，在steps上层增加roads做聚合',
          type: 'Boolean',
          request: '必填'
        },
        {
          param: 'strategy',
          mean: '导航策略',
          type: 'String',
          request: '必填'
        },
        {
          param: 'waypoints',
          mean: '途径点，最多16个，按照用户输入顺序放入。',
          type: 'Array[Location]',
          request: '必填'
        }
      ],
      tableData1: [
        {
          param: 'direction',
          mean: 'direction',
          type: 'Number',
          request: '必填'
        },
        {
          param: 'executeOrderStatus',
          mean: 'executeOrderStatus',
          type: 'Integer',
          request: '必填'
        },
        {
          param: 'latitude',
          mean: 'latitude',
          type: 'Number',
          request: '必填'
        },
        {
          param: 'longitude',
          mean: 'longitude',
          type: 'Number',
          request: '必填'
        },
        {
          param: 'onlineStatus',
          mean: 'onlineStatus',
          type: 'Integer',
          request: '必填'
        },
        {
          param: 'timestamp',
          mean: 'timestamp',
          type: 'Integer',
          request: '必填'
        },
        {
          param: 'vin',
          mean: 'vin',
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