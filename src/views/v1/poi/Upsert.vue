<template>
  <div class="geo">
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>api接入说明</el-breadcrumb-item>
      <el-breadcrumb-item>poi相关接口</el-breadcrumb-item>
      <el-breadcrumb-item>新增或者修改</el-breadcrumb-item>
    </el-breadcrumb>
    <h1 class="title">自定义的上下车点:新增或者修改</h1>
    <h2>接口使用说明</h2>
    <h3>新增或者修改</h3>
    <h4>请求地址</h4>
    <p>http://192.168.44.152:8080/v1/poi/custom/upsert</p>
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
          param: 'adCode',
          mean: 'adCode',
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
          mean: 'addressDetail',
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
          param: 'lat',
          mean: 'lat',
          type: 'String',
          request: '必填'
        },
        {
          param: 'lng',
          mean: 'lng',
          type: 'String',
          request: '必填'
        },
        {
          param: 'poiId',
          mean:
            '不传时为新增，上车点id（共12位，前八位创建的年月日，后四位数字按创建顺序升序，不足4位用0补齐，如20203250001，202032513451 或 业务标识+自增的 12位，如SFC0000001 总长度 10 位',
          type: 'String',
          request: '必填'
        },
        {
          param: 'pointType',
          mean: 'pointType',
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