<template>
  <div class="summary">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>api接入说明</el-breadcrumb-item>
      <el-breadcrumb-item>概述</el-breadcrumb-item>
    </el-breadcrumb>
    <h1 class="title">概述</h1>
    <p>最后更新时间: 2020年04月26日</p>
    <h2>Web服务API简介</h2>
    <p>高德Web服务API向开发者提供HTTP接口，开发者可通过这些接口使用各类型的地理数据服务，返回结果支持JSON和XML格式。</p>
    <p>Web服务API对所有用户开放。使用本组服务之前，需要申请应用Key。不同类型用户可获取不同的数据访问能力。</p>
    <div class="summaryBox">
      <img src="~assets/images/summary.png" alt />
    </div>
  </div>
</template>

<script>
export default {}
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
.summaryBox {
  width: 100%;
  img {
    width: 90%;
  }
}
</style>