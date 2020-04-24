<template>
  <div class="index">
    <gis-header></gis-header>
    <img src="~assets/images/banner-mapstyle.png" alt />
  </div>
</template>

<script>
import GisHeader from 'components/GisHeader'
export default {
  components: {
    GisHeader
  }
}
</script>

<style lang="less" scope>
.index {
  width: 100%;
  img {
    width: 100%;
  }
}
</style>>
