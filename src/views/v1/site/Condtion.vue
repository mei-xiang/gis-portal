<template>
  <div class="geo">
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>您现在的位置： 开发</el-breadcrumb-item>
      <el-breadcrumb-item>服务站相关</el-breadcrumb-item>
      <el-breadcrumb-item>条件查询</el-breadcrumb-item>
    </el-breadcrumb>
    <h1 class="title">条件查询</h1>
    <h2>接口使用说明</h2>
    <h3>条件查询接口</h3>
    <h4>请求地址</h4>
    <p>http://192.168.44.152:8080/v1/site/condtion</p>
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
        "msg": "成功",
        "code": 200,
        "data": [
          {
            "id": "string",
            "uuid": "string",
            "name": "string",
            "province": "string",
            "city": "string",
            "country": "string",
            "address": "string",
            "cityCode": "string",
            "areaCode": "string",
            "coordinate": {
              "lng": 0,
              "lat": 0
            },
            "type": 0,
            "status": 0,
            "distance": 0,
            "createTime": 1587468391845,
            "updateTime": 1587468391845,
            "lng": 0,
            "lat": 0,
            "typeList": [
              0
            ],
            "supplierId": "string",
            "cityCodeList": [
              "string"
            ]
          }
        ],
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
          param: 'address',
          mean: '详细地址',
          type: 'String',
          request: '必填'
        },
        {
          param: 'areaCode',
          mean: '区域编码',
          type: 'String',
          request: '必填'
        },
        {
          param: 'city',
          mean: '城市',
          type: 'String',
          request: '必填'
        },
        {
          param: 'cityCode',
          mean: '城市编码',
          type: 'String',
          request: '必填'
        },
        {
          param: 'cityCodeList',
          mean: '区域编码列表',
          type: 'Array[string]',
          request: '必填'
        },
        {
          param: 'coordinate',
          mean: '经纬度对象。 Coordinate {lat (number, optional),lng (number, optional)}',
          type: 'Coordinate',
          request: '必填'
        },
        {
          param: 'country',
          mean: '区县',
          type: 'String',
          request: '必填'
        },
        {
          param: 'createTime',
          mean: '创建时间',
          type: 'String',
          request: '必填'
        },
        {
          param: 'distance',
          mean: '距离',
          type: 'Number',
          request: '必填'
        },
        {
          param: 'id',
          mean: '数据唯一主键',
          type: 'String',
          request: '必填'
        },
        {
          param: 'lat',
          mean: '纬度',
          type: 'Number',
          request: '必填'
        },
        {
          param: 'lng',
          mean: '经度',
          type: 'Number',
          request: '必填'
        },
        {
          param: 'name',
          mean: '名称',
          type: 'String',
          request: '必填'
        },
        {
          param: 'province',
          mean: '省份',
          type: 'String',
          request: '必填'
        },
        {
          param: 'status',
          mean: '状态（-1：删除、0：无效、1：生效）键',
          type: 'Integer',
          request: '必填'
        },
        {
          param: 'supplierId',
          mean: '供应商ID',
          type: 'String',
          request: '必填'
        },
        {
          param: 'type',
          mean: '站点类型(0:加油站,1:充电站,2:加气站,3:维修站,4:司机之家)',
          type: 'Integer',
          request: '必填'
        },
        {
          param: 'typeList',
          mean: '站点类型集合',
          type: 'Array[integer]',
          request: '必填'
        },
        {
          param: 'updateTime',
          mean: '更新时间',
          type: 'String',
          request: '必填'
        },
        {
          param: 'uuid',
          mean: '服务站点信息唯一标识键',
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