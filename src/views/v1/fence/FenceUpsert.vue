<template>
  <div class="geo">
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>您现在的位置： 开发</el-breadcrumb-item>
      <el-breadcrumb-item>围栏相关接口</el-breadcrumb-item>
      <el-breadcrumb-item>匹配的围栏结果</el-breadcrumb-item>
    </el-breadcrumb>
    <h1 class="title">判断一个或多个坐标是否在指定的一批围栏内，并返回所有的匹配的围栏结果</h1>
    <h2>接口使用说明</h2>
    <h3>判断一个或多个坐标是否在指定的一批围栏内，并返回所有的匹配的围栏结果接口</h3>
    <h4>请求地址</h4>
    <p>http://192.168.44.152:8080/v1/fence/upsert</p>
    <h4>请求方法</h4>
    <p>POST</p>
    <h4>请求</h4>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="param" label="参数"></el-table-column>
      <el-table-column prop="mean" label="含义"></el-table-column>
      <el-table-column prop="type" label="类型"></el-table-column>
      <el-table-column prop="request" label="是否必填"></el-table-column>
    </el-table>
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
          param: 'addressTypeList',
          mean: '出发地/目的地 多选：1出发地，2 目的地',
          type: 'Array[integer]',
          request: '必填'
        },
        {
          param: 'cityCode',
          mean: '城市编码',
          type: 'String',
          request: '必填'
        },
        {
          param: 'companyId',
          mean: '企业id',
          type: 'String',
          request: '必填'
        },
        {
          param: 'createTime',
          mean: 'createTime',
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
          param: 'direction',
          mean: '正向/逆向 单选 ：1正向，2 逆向',
          type: 'Integer',
          request: '必填'
        },
        {
          param: 'effectiveTime',
          mean: '生效时间',
          type: 'String',
          request: '必填'
        },
        {
          param: 'extAttr',
          mean: '扩展属性字段，内容存json格式，如交通枢纽围栏的优质单订单距离阈值 {tripDistance:"1000"}',
          type: 'String',
          request: '必填'
        },
        {
          param: 'failureTime',
          mean: '失效时间',
          type: 'String',
          request: '必填'
        },
        {
          param: 'fencePoint',
          mean: 'Coordinate {lat (number, optional),lng (number, optional)}。围栏中心点',
          type: 'Coordinate',
          request: '必填'
        },
        {
          param: 'filterTagList',
          mean: '过滤标签 1，‘无人证’,2，‘无车证’',
          type: 'Array[integer]',
          request: '必填'
        },
        {
          param: 'filterType',
          mean: '过滤类型：1,乘客可见”、2:“乘客不可见”、3 :“司机/车辆过滤”',
          type: 'Integer',
          request: '必填'
        },
        {
          param: 'name',
          mean: '围栏名称',
          type: 'String',
          request: '必填'
        },
        {
          param: 'platformCode',
          mean: '平台类型',
          type: 'Integer',
          request: '必填'
        },
        {
          param: 'provinceCode',
          mean: '省份编码',
          type: 'String',
          request: '必填'
        },
        {
          param: 'railType',
          mean: '围栏类型(RailTypeEnum)',
          type: 'Integer',
          request: '必填'
        },
        {
          param: 'remark',
          mean: '备注',
          type: 'String',
          request: '必填'
        },
        {
          param: 'scope',
          mean: '范围',
          type: 'String',
          request: '必填'
        },
        {
          param: 'serviceType',
          mean: '业务类型(1，出租车，2，专车，4，快车，99.全选)',
          type: 'Integer',
          request: '必填'
        },
        {
          param: 'status',
          mean: ' 状态（1:正常，2：未生效， 3失效 ）',
          type: 'Integer',
          request: '必填'
        },
        {
          param: 'updateTime',
          mean: ' updateTime',
          type: 'String',
          request: '必填'
        },
        {
          param: 'updater',
          mean: ' updater',
          type: 'String',
          request: '必填'
        },
        {
          param: 'uuid',
          mean: ' uuid',
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