<template>
  <div>
    <el-header class="topbar">
      <div class="logo">
        <router-link to="/introduce" class="logo">
          <img src="~assets/images/logo.png" style="height: 35px;" alt />
        </router-link>
      </div>
      <div class="introduce">
        <router-link to="/introduce" @click="tap(1)" :class="{isActive: currentIndex == 1}">
          <span>中心介绍</span>
        </router-link>
      </div>
      <div class="api">
        <router-link to="/summary" @click="tap(2)" :class="{isActive: currentIndex == 2}">
          <span>api接入说明</span>
        </router-link>
      </div>
      <div class="case" @click="tap(3)" :class="{isActive: currentIndex == 3}">
        <router-link to="/case">
          <span>案例文档</span>
        </router-link>
      </div>
      <div class="questions" @click="tap(4)" :class="{isActive: currentIndex == 4}">
        <router-link to="/questions/flow">
          <span>常见问题</span>
        </router-link>
      </div>
      <!-- <div class="search">
        <input type="text" autocomplete="off" />
        <i class="fa fa-search"></i>
      </div> -->
    </el-header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: -1
    }
  },
  // mounted() {
  //   if (this.$route.path.indexOf('/introduce') !== -1) {
  //     this.currentIndex = 1
  //   } else if (this.$route.path.indexOf('/summary') !== -1) {
  //     this.currentIndex = 2
  //   } else if (this.$route.path.indexOf('case') !== -1) {
  //     this.currentIndex = 3
  //   } else if (this.$route.path.indexOf('questions') !== -1) {
  //     this.currentIndex = 4
  //   }
  //   console.log(this.currentIndex)
  // },
  // watch: {
  //   currentIndex() {
  //     if (this.$route.path.indexOf('/introduce') !== -1) {
  //       this.currentIndex = 1
  //     } else if (this.$route.path.indexOf('/summary') !== -1) {
  //       this.currentIndex = 2
  //     } else if (this.$route.path.indexOf('/case') !== -1) {
  //       this.currentIndex = 3
  //     } else if (this.$route.path.indexOf('/questions') !== -1) {
  //       this.currentIndex = 4
  //     }
  //   }
  // },
  methods: {
    tap(index) {
      // console.log(index)
      this.currentIndex = index
    }
  }
}
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
      display: flex;
      align-items: center;
      &.logo {
        justify-content: center;
        text-align: center;
      }

      span:hover {
        color: #337ab7;
      }
      &.isActive {
        color: #337ab7;
      }
    }
  }
  .search {
    position: relative;
    display: flex;
    align-items: center;
    input {
      width: 100%;
      height: 28px;
      color: #fff;
      font-size: 12px;
      border-radius: 2px;
      background: rgba(255, 255, 255, 0.1);
    }
    i {
      position: absolute;
      top: 22px;
      right: 15px;
      color: rgba(255, 255, 255, 0.5);
    }
  }
}
</style>>
