<template>
  <div class="questions">
    <!-- <gis-header></gis-header> -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>api接入说明</el-breadcrumb-item>
      <el-breadcrumb-item>常见问题</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content">
      <h1 class="title">路行规划结果（polyline)中的道路节点，是如何选取的？</h1>
      <p>会根据路线的情况每隔一段距离就取一个点，由于路况的不同，取点的范围也是不同的。</p>
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