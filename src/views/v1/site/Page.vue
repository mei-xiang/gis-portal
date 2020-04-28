<template>
  <div class="geo">
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>API接入说明</el-breadcrumb-item>
      <el-breadcrumb-item>服务站相关</el-breadcrumb-item>
      <el-breadcrumb-item>分页查询</el-breadcrumb-item>
    </el-breadcrumb>
    <h1 class="title">分页查询</h1>
    <h2>接口使用说明</h2>
    <h3>分页查询接口</h3>
    <h4>请求地址</h4>
    <p>http://{{domainName}}:8080/v1/site/page</p>
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
import { getPageData } from 'network/site'
export default {
  data() {
    return {
      isRun: false,
      domainName: DOMAIN_NAME,
      tableData: [
        {
          param: 'address',
          mean: '详细地址',
          type: 'String',
          request: '选填'
        },
        {
          param: 'areaCode',
          mean: '区域编码',
          type: 'String',
          request: '选填'
        },
        {
          param: 'city',
          mean: '城市',
          type: 'String',
          request: '选填'
        },
        {
          param: 'cityCode',
          mean: '城市编码',
          type: 'String',
          request: '选填'
        },
        {
          param: 'cityCodeList',
          mean: '区域编码列表',
          type: 'Array[string]',
          request: '选填'
        },
        {
          param: 'coordinate',
          mean:
            '经纬度对象。 Coordinate {lat (number, optional),lng (number, optional)}',
          type: 'Coordinate',
          request: '选填'
        },
        {
          param: 'country',
          mean: '区县',
          type: 'String',
          request: '选填'
        },
        {
          param: 'createTime',
          mean: '创建时间',
          type: 'String',
          request: '选填'
        },
        {
          param: 'currentPage',
          mean: 'currentPage',
          type: 'Integer',
          request: '可选'
        },
        {
          param: 'distance',
          mean: '距离',
          type: 'Number',
          request: '选填'
        },
        {
          param: 'id',
          mean: '数据唯一主键',
          type: 'String',
          request: '选填'
        },
        {
          param: 'lat',
          mean: '纬度',
          type: 'Number',
          request: '选填'
        },
        {
          param: 'lng',
          mean: '经度',
          type: 'Number',
          request: '选填'
        },
        {
          param: 'name',
          mean: '名称',
          type: 'String',
          request: '选填'
        },
        {
          param: 'pageSize',
          mean: 'pageSize',
          type: 'Integer',
          request: '选填'
        },
        {
          param: 'province',
          mean: '省份',
          type: 'String',
          request: '选填'
        },
        {
          param: 'status',
          mean: '状态（-1：删除、0：无效、1：生效）键',
          type: 'Integer',
          request: '选填'
        },
        {
          param: 'supplierId',
          mean: '供应商ID',
          type: 'String',
          request: '选填'
        },
        {
          param: 'type',
          mean: '站点类型(0:加油站,1:充电站,2:加气站,3:维修站,4:司机之家)',
          type: 'Integer',
          request: '选填'
        },
        {
          param: 'typeList',
          mean: '站点类型集合',
          type: 'Array[integer]',
          request: '选填'
        },
        {
          param: 'updateTime',
          mean: '更新时间',
          type: 'String',
          request: '选填'
        },
        {
          param: 'uuid',
          mean: '服务站点信息唯一标识键',
          type: 'String',
          request: '选填'
        }
      ],
      exptableData: [
        {
          param: 'address',
          value: 'string',
          mean: '详细地址',
          request: '选填'
        },
        {
          param: 'areaCode',
          value: 'string',
          mean: '区域编码',
          request: '选填'
        },
        {
          param: 'city',
          value: 'string',
          mean: '城市',
          request: '选填'
        },
        {
          param: 'cityCode',
          value: 'string',
          mean: '城市编码',
          request: '选填'
        },
        {
          param: 'cityCodeList',
          value: '["string","string"]',
          mean: '区域编码列表。如：["值1","值2",...]',
          request: '选填'
        },
        {
          param: 'coordinate',
          value: '{"lat": 0,"lng": 0}',
          mean:
            '经纬度对象。 Coordinate {lat (number, optional),lng (number, optional)}',
          request: '选填'
        },
        {
          param: 'country',
          value: 'string',
          mean: '区县',
          request: '选填'
        },
        {
          param: 'createTime',
          value: '2020-04-23T06:17:43.884Z',
          mean: '创建时间',
          request: '选填'
        },
        {
          param: 'currentPage',
          value: 0,
          mean: 'currentPage',
          request: '可选'
        },
        {
          param: 'distance',
          value: 0,
          mean: '距离',
          request: '选填'
        },
        {
          param: 'id',
          value: 'string',
          mean: '数据唯一主键',
          request: '选填'
        },
        {
          param: 'lat',
          value: 0,
          mean: '纬度',
          request: '选填'
        },
        {
          param: 'lng',
          value: 0,
          mean: '经度',
          request: '选填'
        },
        {
          param: 'name',
          value: 'string',
          mean: '名称',
          request: '选填'
        },
        {
          param: 'pageSize',
          value: 0,
          mean: 'pageSize',
          request: '选填'
        },
        {
          param: 'province',
          value: 'string',
          mean: '省份',
          request: '选填'
        },
        {
          param: 'status',
          value: 0,
          mean: '状态（-1：删除、0：无效、1：生效）键',
          request: '选填'
        },
        {
          param: 'supplierId',
          value: 'string',
          mean: '供应商ID',
          request: '选填'
        },
        {
          param: 'type',
          value: 0,
          mean: '站点类型(0:加油站,1:充电站,2:加气站,3:维修站,4:司机之家)',
          request: '选填'
        },
        {
          param: 'typeList',
          value: '[0]',
          mean: '站点类型集合。如：[1,2,...]',
          request: '选填'
        },
        {
          param: 'updateTime',
          value: '2020-04-23T06:17:43.884Z',
          mean: '更新时间',
          request: '选填'
        },
        {
          param: 'uuid',
          value: 'string',
          mean: '服务站点信息唯一标识键',
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
        if (item.param === 'cityCodeList') {
          this.condtionObj[item.param] = item.value
            ? JSON.parse(item.value)
            : []
        } else if (item.param === 'coordinate') {
          this.condtionObj[item.param] = item.value
            ? JSON.parse(item.value)
            : {}
        } else if (item.param === 'typeList') {
          this.condtionObj[item.param] = item.value
            ? JSON.parse(item.value)
            : []
        } else {
          this.condtionObj[item.param] = item.value
        }
      })
      // this.condtionObj = new Page(this.exptableData)
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
}
</style>