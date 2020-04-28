<template>
  <div class="geo">
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>API接入说明</el-breadcrumb-item>
      <el-breadcrumb-item>围栏相关接口</el-breadcrumb-item>
      <el-breadcrumb-item>匹配的围栏结果</el-breadcrumb-item>
    </el-breadcrumb>
    <h1 class="title">判断一个或多个坐标是否在指定的一批围栏内，并返回所有的匹配的围栏结果</h1>
    <h2>接口使用说明</h2>
    <h3>判断一个或多个坐标是否在指定的一批围栏内，并返回所有的匹配的围栏结果接口</h3>
    <h4>请求地址</h4>
    <p>http://{{domainName}}:8080/v1/fence/bypoint</p>
    <h4>请求方法</h4>
    <p>POST</p>
    <h4>请求</h4>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="param" label="参数"></el-table-column>
      <el-table-column prop="mean" label="含义"></el-table-column>
      <el-table-column prop="type" label="类型"></el-table-column>
      <el-table-column prop="request" label="是否必填"></el-table-column>
    </el-table>
    <p>fenceQuery对象参数</p>
    <el-table :data="tableData1" border style="width: 100%">
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
import { getBypointData } from 'network/fence'
export default {
  data() {
    return {
      isRun: false,
      domainName: DOMAIN_NAME,
      tableData: [
        {
          param: 'coordinate',
          mean:
            '坐标。Coordinate {lat (number, optional),lng (number, optional)}',
          type: 'Coordinate',
          request: '选填'
        },
        {
          param: 'fenceQuery',
          mean: '电子围栏查询对象',
          type: 'Object',
          request: '选填'
        }
      ],
      tableData1: [
        {
          param: 'addressTypeList',
          mean: '出发地/目的地 多选：1出发地，2 目的地',
          type: 'Array[integer]',
          request: '选填'
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
          request: '选填'
        },
        {
          param: 'createTime',
          mean: 'createTime',
          type: 'String',
          request: '选填'
        },
        {
          param: 'direction',
          mean: '正向/逆向 单选 ：1正向，2 逆向',
          type: 'Integer',
          request: '选填'
        },
        {
          param: 'filterType',
          mean: '过滤类型：1,乘客可见”、2:“乘客不可见”、3 :“司机/车辆过滤”',
          type: 'Integer',
          request: '选填'
        },
        {
          param: 'name',
          mean: '围栏名称',
          type: 'String',
          request: '选填'
        },
        {
          param: 'platformCode',
          mean: '平台类型',
          type: 'Integer',
          request: '选填'
        },
        {
          param: 'provinceCode',
          mean: '省份编码',
          type: 'String',
          request: '选填'
        },
        {
          param: 'railType',
          mean: '围栏类型(RailTypeEnum)',
          type: 'Integer',
          request: '必填'
        },
        {
          param: 'serviceType',
          mean: '业务类型(1，出租车，2，专车，4，快车，99.全选)',
          type: 'Integer',
          request: '选填'
        },
        {
          param: 'status',
          mean: ' 状态（1:正常，2：未生效， 3失效 ）',
          type: 'Integer',
          request: '选填'
        }
      ],
      exptableData: [
        {
          param: 'coordinate',
          value: '{"lat": 0,"lng": 0}',
          mean:
            '坐标。Coordinate {lat (number, optional),lng (number, optional)}',
          request: '选填'
        },
        {
          param: 'addressTypeList',
          value: '[0]',
          mean: '出发地/目的地 。多选：1出发地，2 目的地。如：[1,2,...]',
          request: '选填'
        },
        {
          param: 'cityCode',
          value: 'string',
          mean: '城市编码',
          request: '必填'
        },
        {
          param: 'companyId',
          value: 'string',
          mean: '企业id',
          request: '选填'
        },
        {
          param: 'createTime',
          value: '2020-04-24T02:23:26.230Z',
          mean: 'createTime',
          request: '选填'
        },
        {
          param: 'direction',
          value: 0,
          mean: '正向/逆向 单选 ：1正向，2 逆向',
          request: '选填'
        },
        {
          param: 'filterType',
          value: 0,
          mean: '过滤类型：1,乘客可见”、2:“乘客不可见”、3 :“司机/车辆过滤”',
          request: '选填'
        },
        {
          param: 'name',
          value: 'string',
          mean: '围栏名称',
          request: '选填'
        },
        {
          param: 'platformCode',
          value: 0,
          mean: '平台类型',
          request: '选填'
        },
        {
          param: 'provinceCode',
          value: 'string',
          mean: '省份编码',
          request: '选填'
        },
        {
          param: 'railType',
          value: 0,
          mean: '围栏类型(RailTypeEnum)',
          request: '必填'
        },
        {
          param: 'serviceType',
          value: 0,
          mean: '业务类型(1，出租车，2，专车，4，快车，99.全选)',
          request: '选填'
        },
        {
          param: 'status',
          value: 0,
          mean: ' 状态（1:正常，2：未生效， 3失效 ）',
          request: '选填'
        }
      ],
      // 运行显示数据
      content: '',
      // 请求对象，通过class处理
      bypointObj: {
        coordinate: {},
        fenceQuery: {}
      }
    }
  },
  methods: {
    run() {
      this.isRun = true
      this.exptableData.forEach((item, index) => {
        if (item.param === 'coordinate') {
          this.bypointObj[item.param] = item.value ? JSON.parse(item.value) : {}
        } else if (item.param === 'addressTypeList') {
          this.bypointObj.fenceQuery[item.param] = item.value
            ? JSON.parse(item.value)
            : []
        } else {
          this.bypointObj.fenceQuery[item.param] = item.value
        }
      })
      getBypointData(this.bypointObj).then(res => {
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