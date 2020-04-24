<template>
  <!-- 面包屑 -->
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">api接入说明</el-breadcrumb-item>
    <el-breadcrumb-item>
      <slot name="firstMenu"></slot>
    </el-breadcrumb-item>
    <el-breadcrumb-item>
      <slot name="twoMenu"></slot>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script>
export default {}
</script>

<style lang="less" sope>
</style>