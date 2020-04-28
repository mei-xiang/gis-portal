<template>
  <div class="geo">
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>API接入说明</el-breadcrumb-item>
      <el-breadcrumb-item>行程相关</el-breadcrumb-item>
      <el-breadcrumb-item>驾车路径规划</el-breadcrumb-item>
    </el-breadcrumb>
    <h1 class="title">驾车路径规划</h1>
    <h2>接口使用说明</h2>
    <h3>驾车路径规划接口</h3>
    <h4>请求地址</h4>
    <p>http://{{domainName}}:8080/v1/route/drive-route-plan</p>
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
import { getDriveRoutePlanData } from 'network/route'
export default {
  data() {
    return {
      isRun: false,
      domainName: DOMAIN_NAME,
      tableData: [
        {
          param: 'cartype',
          mean: '0：普通汽车(默认值) 1：纯电动车 2：插电混动车',
          type: 'Integer',
          request: '选填'
        },
        {
          param: 'destination',
          mean: '目的地',
          type: 'Location',
          request: '选填'
        },
        {
          param: 'ferry',
          mean:
            '在路径规划中，是否使用轮渡，默认 0 0:使用渡轮(默认) 1:不使用渡轮',
          type: 'Integer',
          request: '选填'
        },
        {
          param: 'number',
          mean:
            '填入除省份及标点之外，车牌的字母和数字（需大写）。用于判断限行相关。(例如：A12345)',
          type: 'String',
          request: '选填'
        },
        {
          param: 'origin',
          mean: '出发点',
          type: 'Location',
          request: '选填'
        },
        {
          param: 'province',
          mean: '用汉字填入车牌省份缩写，用于判断是否限行，（例如：京）',
          type: 'String',
          request: '选填'
        },
        {
          param: 'roadaggregation',
          mean:
            '是否返回路径聚合信息，默认 false。false:不返回路径聚合信息;true:返回路径聚合信息，在steps上层增加roads做聚合',
          type: 'Boolean',
          request: '选填'
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
          request: '选填'
        }
      ],
      tableData1: [
        {
          param: 'direction',
          mean: 'direction',
          type: 'Number',
          request: '选填'
        },
        {
          param: 'executeOrderStatus',
          mean: 'executeOrderStatus',
          type: 'Integer',
          request: '选填'
        },
        {
          param: 'latitude',
          mean: 'latitude',
          type: 'Number',
          request: '选填'
        },
        {
          param: 'longitude',
          mean: 'longitude',
          type: 'Number',
          request: '选填'
        },
        {
          param: 'onlineStatus',
          mean: 'onlineStatus',
          type: 'Integer',
          request: '选填'
        },
        {
          param: 'timestamp',
          mean: 'timestamp',
          type: 'Integer',
          request: '选填'
        },
        {
          param: 'vin',
          mean: 'vin',
          type: 'String',
          request: '选填'
        }
      ],
      exptableData: [
        {
          param: 'cartype',
          value: 0,
          mean: '0：普通汽车(默认值) 1：纯电动车 2：插电混动车',
          request: '选填',
          type: 'cartype'
        },
        // {
        //   param: 'destination',
        //   value: 0,
        //   mean: '目的地',
        //   type: 'Location',
        //   request: '选填'
        // },
        {
          param: 'direction',
          value: 0,
          mean: '目的地-direction',
          request: '选填',
          type: 'destination'
        },
        {
          param: 'executeOrderStatus',
          value: 0,
          mean: '目的地-executeOrderStatus',
          request: '选填',
          type: 'destination'
        },
        {
          param: 'latitude',
          value: 0,
          mean: '目的地-latitude',
          request: '选填',
          type: 'destination'
        },
        {
          param: 'longitude',
          value: 0,
          mean: '目的地-longitude',
          request: '选填',
          type: 'destination'
        },
        {
          param: 'onlineStatus',
          value: 0,
          mean: '目的地-onlineStatus',
          request: '选填',
          type: 'destination'
        },
        {
          param: 'timestamp',
          value: 0,
          mean: '目的地-timestamp',
          request: '选填',
          type: 'destination'
        },
        {
          param: 'vin',
          value: 'vin',
          mean: '目的地-string',
          request: '选填',
          type: 'destination'
        },
        {
          param: 'ferry',
          value: 0,
          mean:
            '在路径规划中，是否使用轮渡，默认 0 0:使用渡轮(默认) 1:不使用渡轮',
          request: '选填',
          type: 'ferry'
        },
        {
          param: 'number',
          value: 'string',
          mean:
            '填入除省份及标点之外，车牌的字母和数字（需大写）。用于判断限行相关。(例如：A12345)',
          request: '选填',
          type: 'number'
        },
        // {
        //   param: 'origin',
        //   value: 0,
        //   mean: '出发点',
        //   type: 'Location',
        //   request: '选填'
        // },
        {
          param: 'direction',
          value: 0,
          mean: '出发点-direction',
          request: '选填',
          type: 'origin'
        },
        {
          param: 'executeOrderStatus',
          value: 0,
          mean: '出发点-executeOrderStatus',
          request: '选填',
          type: 'origin'
        },
        {
          param: 'latitude',
          value: 0,
          mean: '出发点-latitude',
          request: '选填',
          type: 'origin'
        },
        {
          param: 'longitude',
          value: 0,
          mean: '出发点-longitude',
          request: '选填',
          type: 'origin'
        },
        {
          param: 'onlineStatus',
          value: 0,
          mean: '出发点-onlineStatus',
          request: '选填',
          type: 'origin'
        },
        {
          param: 'timestamp',
          value: 0,
          mean: '出发点-timestamp',
          request: '选填',
          type: 'origin'
        },
        {
          param: 'vin',
          value: 'string',
          mean: '出发点-vin',
          request: '选填',
          type: 'origin'
        },
        {
          param: 'province',
          value: 'string',
          mean: '用汉字填入车牌省份缩写，用于判断是否限行，（例如：京）',
          request: '选填',
          type: 'province'
        },
        {
          param: 'roadaggregation',
          value: 'true',
          mean:
            '是否返回路径聚合信息，默认 false。false:不返回路径聚合信息;true:返回路径聚合信息，在steps上层增加roads做聚合',
          request: '选填',
          type: 'roadaggregation'
        },
        {
          param: 'strategy',
          value: 'string',
          mean: '导航策略',
          request: '必填',
          type: 'strategy'
        },
        // {
        //   param: 'waypoints',
        //   value: 0,
        //   mean: '途径点，最多16个，按照用户输入顺序放入。',
        //   type: 'Array[Location]',
        //   request: '选填'
        // }
        {
          param: 'direction',
          value: 0,
          mean: '途径点-direction',
          request: '选填',
          type: 'waypoints'
        },
        {
          param: 'executeOrderStatus',
          value: 0,
          mean: '途径点-executeOrderStatus',
          request: '选填',
          type: 'waypoints'
        },
        {
          param: 'latitude',
          value: 0,
          mean: '途径点-latitude',
          request: '选填',
          type: 'waypoints'
        },
        {
          param: 'longitude',
          value: 0,
          mean: '途径点-longitude',
          request: '选填',
          type: 'waypoints'
        },
        {
          param: 'onlineStatus',
          value: 0,
          mean: '途径点-onlineStatus',
          request: '选填',
          type: 'waypoints'
        },
        {
          param: 'timestamp',
          value: 0,
          mean: '途径点-timestamp',
          request: '选填',
          type: 'waypoints'
        },
        {
          param: 'vin',
          value: 'string',
          mean: '途径点-vin',
          request: '选填',
          type: 'waypoints'
        }
      ],
      // 运行显示数据
      content: '',
      // 请求对象，通过class处理
      distanceObj: {
        destination: {},
        origin: {},
        waypoints: [{}]
      }
    }
  },
  methods: {
    run() {
      this.isRun = true
      this.exptableData.forEach((item, index) => {
        if (item.type === 'destination') {
          this.distanceObj.destination[item.param] = item.value
        } else if (item.type === 'origin') {
          this.distanceObj.origin[item.param] = item.value
        } else if (item.type === 'waypoints') {
          this.distanceObj.waypoints[0][item.param] = item.value
        } else if (item.param === 'roadaggregation') {
          this.distanceObj[item.param] = JSON.parse(item.value)
        } else {
          this.distanceObj[item.param] = item.value
        }
      })
      getDriveRoutePlanData(this.distanceObj).then(res => {
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