<template>
  <div class="geo">
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>api接入说明</el-breadcrumb-item>
      <el-breadcrumb-item>poi相关接口</el-breadcrumb-item>
      <el-breadcrumb-item>根据条件查询数量</el-breadcrumb-item>
    </el-breadcrumb>
    <h1 class="title">自定义的上下车点:根据条件查询数量</h1>
    <h2>接口使用说明</h2>
    <h3>根据条件查询数量</h3>
    <h4>请求地址</h4>
    <p>http://192.168.44.152:8080/v1/poi/custom/count-by-condition</p>
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
import { getCustomConditionData } from 'network/poi'
export default {
  data() {
    return {
      isRun: false,
      tableData: [
        {
          param: 'adCode',
          mean: '区域编码',
          type: 'String',
          request: '必填'
        },
        {
          param: 'address',
          mean: 'address',
          type: 'String',
          request: '必填'
        },
        {
          param: 'addressDetail',
          mean: '详细地址',
          type: 'String',
          request: '必填'
        },
        {
          param: 'areaId',
          mean: 'areaId',
          type: 'String',
          request: '必填'
        },
        {
          param: 'areaIdList',
          mean: '运营区域id List',
          type: 'Array[string]',
          request: '必填'
        },
        {
          param: 'bizTypeEnum',
          mean: 'LIFT/AUTO_DRIVER',
          type: 'String',
          request: '必填'
        },
        {
          param: 'cityCode',
          mean: 'cityCode',
          type: 'String',
          request: '必填'
        },
        {
          param: 'createTime',
          mean: '2020-04-25T10:18:56.214Z',
          type: 'String',
          request: '必填'
        },
        {
          param: 'creator',
          mean: 'creator',
          type: 'String',
          request: '必填'
        },
        {
          param: 'lat',
          mean: '纬度',
          type: 'String',
          request: '必填'
        },
        {
          param: 'lng',
          mean: '纬度',
          type: 'String',
          request: '必填'
        },
        {
          param: 'poiId',
          mean: 'poiId',
          type: 'String',
          request: '必填'
        },
        {
          param: 'pointType',
          mean: '1：上车点 2： 下车点',
          type: 'Integer',
          request: '必填'
        },
        {
          param: 'status',
          mean: 'status',
          type: 'Boolean',
          request: '必填'
        },
        {
          param: 'updateTime',
          mean: 'updateTime',
          type: 'String',
          request: '必填'
        },
        {
          param: 'updater',
          mean: 'updater',
          type: 'String',
          request: '必填'
        }
      ],
      exptableData: [
        {
          param: 'adCode',
          value: 'string',
          mean: '区域编码',
          request: '必填'
        },
        {
          param: 'address',
          value: 'string',
          mean: 'address',
          request: '必填'
        },
        {
          param: 'addressDetail',
          value: 'string',
          mean: '详细地址',
          request: '必填'
        },
        {
          param: 'areaId',
          value: 'string',
          mean: 'areaId',
          request: '必填'
        },
        {
          param: 'areaIdList',
          value: '["string","string"]',
          mean: '运营区域id List。如：["值1","值2",...]',
          request: '必填'
        },
        {
          param: 'bizTypeEnum',
          value: 'LIFT',
          mean: 'LIFT/AUTO_DRIVER',
          request: '必填'
        },
        {
          param: 'cityCode',
          value: 'string',
          mean: 'cityCode',
          request: '必填'
        },
        {
          param: 'createTime',
          value: '2020-04-25T10:18:56.214Z',
          mean: 'createTime',
          request: '必填'
        },
        {
          param: 'creator',
          value: 'string',
          mean: 'creator',
          request: '必填'
        },
        {
          param: 'lat',
          value: 'string',
          mean: '纬度',
          request: '必填'
        },
        {
          param: 'lng',
          value: 'string',
          mean: '纬度',
          request: '必填'
        },
        {
          param: 'poiId',
          value: 'string',
          mean: 'poiId',
          request: '必填'
        },
        {
          param: 'pointType',
          value: 0,
          mean: '1：上车点 2： 下车点',
          request: '必填'
        },
        {
          param: 'status',
          value: 'true',
          mean: 'status',
          request: '必填'
        },
        {
          param: 'updateTime',
          value: '2020-04-25T10:18:56.214Z',
          mean: 'updateTime',
          request: '必填'
        },
        {
          param: 'updater',
          value: 'string',
          mean: 'updater',
          request: '必填'
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
        if (item.param === 'areaIdList') {
          this.condtionObj[item.param] = JSON.parse(item.value)
        }
        if (item.param === 'status') {
          this.condtionObj[item.param] = JSON.parse(item.value)
        } else {
          this.condtionObj[item.param] = item.value
        }
      })
      getCustomConditionData(this.condtionObj).then(res => {
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