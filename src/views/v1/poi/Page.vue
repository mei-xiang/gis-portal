<template>
  <div class="geo">
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>API接入说明</el-breadcrumb-item>
      <el-breadcrumb-item>poi相关接口</el-breadcrumb-item>
      <el-breadcrumb-item>分页条件查询</el-breadcrumb-item>
    </el-breadcrumb>
    <h1 class="title">自定义的上下车点:分页条件查询</h1>
    <h2>接口使用说明</h2>
    <h3>分页条件查询</h3>
    <h4>请求地址</h4>
    <p>http://{{domainName}}:8080/v1/poi/custom/page</p>
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
import { getPageData } from 'network/poi'
export default {
  data() {
    return {
      isRun: false,
      domainName: DOMAIN_NAME,
      tableData: [
        {
          param: 'adCode',
          mean: '区域编码',
          type: 'String',
          request: '选填'
        },
        {
          param: 'address',
          mean: 'address',
          type: 'String',
          request: '选填'
        },
        {
          param: 'addressDetail',
          mean: '详细地址',
          type: 'String',
          request: '选填'
        },
        {
          param: 'areaId',
          mean: 'areaId',
          type: 'String',
          request: '选填'
        },
        {
          param: 'bizTypeEnum',
          mean: 'LIFT/AUTO_DRIVER',
          type: 'String',
          request: '选填'
        },
        {
          param: 'cityCode',
          mean: 'cityCode',
          type: 'String',
          request: '选填'
        },
        {
          param: 'createTime',
          mean: 'createTime',
          type: 'String',
          request: '选填'
        },
        {
          param: 'creator',
          mean: 'creator',
          type: 'String',
          request: '选填'
        },
        {
          param: 'currentPage',
          mean: '分页开始位移',
          type: 'Integer',
          request: '必填'
        },
        {
          param: 'lat',
          mean: '纬度',
          type: 'Integer',
          request: '选填'
        },
        {
          param: 'lng',
          mean: '经度',
          type: 'Integer',
          request: '选填'
        },
        {
          param: 'pageSize',
          mean: '分页查询长度',
          type: 'Integer',
          request: '必填'
        },
        {
          param: 'poiId',
          mean:
            '不传时为新增，上车点id（共12位，前八位创建的年月日，后四位数字按创建顺序升序，不足4位用0补齐，如20203250001，202032513451 或 业务标识+自增的 12位，如SFC0000001 总长度 10 位',
          type: 'String',
          request: '选填'
        },
        {
          param: 'pointType',
          mean: '1：上车点 2： 下车点',
          type: 'Integer',
          request: '选填'
        },
        {
          param: 'status',
          mean: 'true 使用 false 停用',
          type: 'Boolean',
          request: '必填'
        },
        {
          param: 'updateTime',
          mean: 'updateTime',
          type: 'String',
          request: '选填'
        },
        {
          param: 'updater',
          mean: 'updater',
          type: 'String',
          request: '选填'
        }
      ],
      exptableData: [
        {
          param: 'adCode',
          value: 'string',
          mean: '区域编码',
          request: '选填'
        },
        {
          param: 'address',
          value: 'string',
          mean: 'address',
          request: '选填'
        },
        {
          param: 'addressDetail',
          value: 'string',
          mean: '详细地址',
          request: '选填'
        },
        {
          param: 'areaId',
          value: 'string',
          mean: 'areaId',
          request: '选填'
        },
        {
          param: 'bizTypeEnum',
          value: 'LIFT',
          mean: 'LIFT/AUTO_DRIVER',
          request: '选填'
        },
        {
          param: 'cityCode',
          value: 'string',
          mean: 'cityCode',
          request: '选填'
        },
        {
          param: 'createTime',
          value: '2020-04-25T10:18:56.215Z',
          mean: 'createTime',
          request: '选填'
        },
        {
          param: 'creator',
          value: 'string',
          mean: 'creator',
          request: '选填'
        },
        {
          param: 'currentPage',
          value: 0,
          mean: '分页开始位移',
          request: '必填'
        },
        {
          param: 'lat',
          value: 'string',
          mean: '纬度',
          request: '选填'
        },
        {
          param: 'lng',
          value: 'string',
          mean: '经度',
          request: '选填'
        },
        {
          param: 'pageSize',
          value: 0,
          mean: '分页查询长度',
          request: '必填'
        },
        {
          param: 'poiId',
          value: 'string',
          mean:
            '不传时为新增，上车点id（共12位，前八位创建的年月日，后四位数字按创建顺序升序，不足4位用0补齐，如20203250001，202032513451 或 业务标识+自增的 12位，如SFC0000001 总长度 10 位',
          request: '选填'
        },
        {
          param: 'pointType',
          value: 1,
          mean: '1：上车点 2： 下车点',
          request: '选填'
        },
        {
          param: 'status',
          value: 'true',
          mean: 'true 使用 false 停用',
          request: '必填'
        },
        {
          param: 'updateTime',
          value: '2020-04-25T10:18:56.215Z',
          mean: 'updateTime',
          request: '选填'
        },
        {
          param: 'updater',
          value: 'string',
          mean: 'updater',
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
        if (item.param === 'status') {
          this.condtionObj[item.param] = JSON.parse(item.value)
        } else {
          this.condtionObj[item.param] = item.value
        }
      })
      getPageData(this.condtionObj).then(res => {
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