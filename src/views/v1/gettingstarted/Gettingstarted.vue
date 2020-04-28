<template>
  <div class="summary">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>API接入说明</el-breadcrumb-item>
      <el-breadcrumb-item>指南</el-breadcrumb-item>
    </el-breadcrumb>
    <h1 class="title">概述</h1>
    <p>最后更新时间: 2020年04月26日</p>
    <p>本指南是向 webAPI添加地图的快速入门指南。</p>
    <h2>第 1 步：申请”Web服务API”密钥（key）</h2>
    <h2>第 2 步：拼接HTTP请求URL</h2>
    <p>第一步申请的key需作为必填参数一同发送</p>
    <h2>第 3 步：接收HTTP请求返回的数据（JSON或XML格式），解析数据。</h2>
    <p>如无特殊声明，接口的输入参数和输出数据编码全部统一为UTF-8。</p>
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
</style>