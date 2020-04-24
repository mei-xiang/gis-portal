<template>
  <div>
    <el-header class="topbar">
      <div class="logo">
        <a href="/">我是logo</a>
      </div>
      <div class="introduce">
        <a href="/introduce">中心介绍</a>
      </div>
      <div class="api">
        <a href="/v1/geocode/geo">api接入说明</a>
      </div>
      <div class="case">
        <a href="/case">案例文档</a>
      </div>
      <div class="questions">
        <a href="/questions">FAQ</a>
      </div>
    </el-header>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scope>
.topbar {
  width: 100%;
  height: 60px;
  background-color: #1d2128;
  color: #fff;
  line-height: 60px;
  font-size: 18px;
  display: flex;
  text-align: center;

  > div {
    flex: 1;
    font-size: 15px;

    a {
      color: #fff;
      display: inline-block;
      height: 100%;
      font-weight: 300;

      &:hover {
        color: #337ab7;
      }
    }
  }
}
</style>>
