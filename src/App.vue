<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import 'assets/css/normalize.css';
@import 'assets/css/base.css';
@import 'assets/css/font-awesome.min.css';

#app {
  width: 100%;
}
</style>
