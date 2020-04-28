<template>
  <div class="questions">
    <!-- <gis-header></gis-header> -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>API接入说明</el-breadcrumb-item>
      <el-breadcrumb-item>常见问题</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content">
      <h1 class="title">一、问题现象</h1>
      <div class="question1">
        <img src="~assets/images/question/question1_pic1.png" alt />
      </div>
      <p class="indent">环境抛出不能加载h3 lib包的错误，流程异常。</p>
      <h1 class="title">二、原因分析</h1>
      <p
        class="indent"
      >该应用引入了uber开源的h3 jar包，使用方式是每次使用都新建一个H3Core的实例。首次创建H3实例时，H3加载器会去加载lib包文件，如果不存在，则会在tmp目录下创建一个libh3-java+随机数+.so的lib包(这里以linux系统为例,Windows下是.dll文件，可以看下源码)，后续新建H3实例直接加载已生成的so包(H3的加载器维护了一个全局静态变量libraryFile，用以记录so包文件的全路径，创建过一次后这个变量始终有值，就不会再创建)。而linux系统的tmp目录默认30天会清理一次，此时再来加载这个已被清理的lib文件就会报错。</p>
      <p class="indent">创建实例</p>
      <div class="question1">
        <img src="~assets/images/question/question1_pic2.png" alt />
      </div>
      <p class="indent">创建并加载lib包</p>
      <div class="question1">
        <img src="~assets/images/question/question1_pic3.png" alt />
        <img src="~assets/images/question/question1_pic4.png" alt />
      </div>
      <h1 class="title">三、解决措施</h1>
      <p
        class="indent"
      >方法1：写个H3工具类，将每次都创建H3实例改为单例模式。仅在首次创建实例时会新建libh3的so包并加载文件，后续直接使用全局唯一的实例，不会再加载so包，即使服务器上的文件被删除也不影响使用。</p>
      <p class="indent">方法2：修改h3源码，指定生成lib包文件到数据盘。</p>
      <p class="indent">推荐方法一：不需要修改源码，不需要关心生成的lib包文件，且实例全局唯一，减少新建实例带来的内存开销等。</p>
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