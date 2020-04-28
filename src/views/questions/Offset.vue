<template>
  <div class="questions">
    <!-- <gis-header></gis-header> -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>API接入说明</el-breadcrumb-item>
      <el-breadcrumb-item>常见问题</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content">
      <h1 class="title">地理编码解析坐标时发生偏移怎么办？</h1>
      <p>发生坐标偏移的解决方式：按照“地址+正确坐标”的格式（如果您可以确认正确坐标尽量提供，我们可以及时验证处理）以“地理编码解析坐标发生偏移”为标题，以工单的方式反馈给我们。</p>
      <p>处理生效时间：正常情况下我们会在5个工作日内修复。</p>
      <p>地理编码解析坐标发生偏移的原因：由于有些数据可能挂错节点、索引数据缺失，导致结果偏差，需要从策略上进行优化处理，我们正在积极改善。</p>
      <p>如果您的检索中多数地点描述是POI的话，（如首开广场）建议您考虑使用关键字搜索API。</p>
    </div>
  </div>
</template>

<script>
// import GisHeader from 'components/GisHeader'
export default {
  // components: {
  //   GisHeader
  // }
}
</script>

<style lang="less" scope>
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
p {
  color: #767676;
  margin: 5px 0;
  line-height: 2;
  overflow-x: hidden;
  word-break: break-all;
}
.question1 {
  width: 100%;
  overflow: auto;
  img {
    // width: 100%;
  }
}
.indent {
  text-indent: 2em;
}
.content {
  margin-bottom: 30px;
}
</style>