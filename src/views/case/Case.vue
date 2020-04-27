<template>
  <div class="case">
    <gis-header></gis-header>
    <div class="banner">
      <div class="left">
        <h3>路线规划</h3>
        <p class="platform">
          适用平台:
          <span class="fa fa-code"></span>
          <span>Web</span>
          <span class="fa fa-android"></span>
          <span>Android</span>
          <span class="fa fa-apple"></span>
          <span>iOS</span>
          <span class="fa fa-television"></span>
          <span>Web Service</span>
        </p>
        <p
          class="desc"
        >路线规划是导航的前提，根据目的地、出发地以及路径策略设置，为用户量身设计出行方案。同时可结合实时交通，帮助用户绕开拥堵路段，提供更贴心、更人性化的出行体验。</p>
      </div>
      <img src="~assets/images/travel.png" alt />
    </div>
    <p class="title">T3-GIS平台路线规划的优势</p>
    <p class="desc">高德路线规划基于全面的路网信息，结合实时路况，在多端为用户提供准确的路线规划能力</p>
    <div class="info all">
      <div class="item">
        <img src="~assets/images/case/case1.png" alt />
        <p>全面的路网信息</p>
      </div>
      <div class="item">
        <img src="~assets/images/case/case2.png" alt />
        <p>精准的实时路况</p>
      </div>
      <div class="item">
        <img src="~assets/images/case/case3.png" alt />
        <p>全面的导航方式</p>
      </div>
    </div>
    <div class="banner">
      <div class="left">
        <h3>搜索</h3>
        <p class="platform">
          适用平台:
          <span class="fa fa-code"></span>
          <span>Web</span>
          <span class="fa fa-android"></span>
          <span>Android</span>
          <span class="fa fa-apple"></span>
          <span>iOS</span>
          <span class="fa fa-television"></span>
          <span>Web Service</span>
        </p>
        <p
          class="desc"
        >路线规划是导航的前提，根据目的地、出发地以及路径策略设置，为用户量身设计出行方案。同时可结合实时交通，帮助用户绕开拥堵路段，提供更贴心、更人性化的出行体验。</p>
      </div>
      <img src="~assets/images/travel.png" alt />
    </div>
    <p class="title">多种搜索方式</p>
    <p class="desc">高德提供了千万级别的POI，通过POI搜索，可以完成找银行，找餐馆、找景点等等的功能</p>
    <div class="info">
      <img src="~assets/images/poi.png" alt />
    </div>
    <div class="geo">
      <img src="~assets/images/geo.png" alt />
    </div>
    <p class="title" style="margin-bottom: 50px;">完善的地图数据系统</p>
    <div class="info all">
      <div class="item">
        <img src="~assets/images/case/img1.png" alt />
        <p>POI 数据</p>
      </div>
      <div class="item">
        <img src="~assets/images/case/img2.png" alt />
        <p>地址数据</p>
      </div>
      <div class="item">
        <img src="~assets/images/case/img3.png" alt />
        <p>公交数据</p>
      </div>
      <div class="item">
        <img src="~assets/images/case/img4.png" alt />
        <p>行政区划数据</p>
      </div>
      <div class="item">
        <img src="~assets/images/case/img5.png" alt />
        <p>天气数据</p>
      </div>
      <div class="item">
        <img src="~assets/images/case/img6.png" alt />
        <p>业务数据</p>
      </div>
    </div>
    <div class="footer">
      <img class="logo" src="~assets/images/logo.png" alt />
      <p>
        © 2019 南京领行科技股份有限公司 &nbsp; &nbsp;版权所有
        <a
          target="_blank"
          style="display:inline-block;text-decoration:none;height:20px;line-height:20px;color:#fff; "
          href="http://www.beian.miit.gov.cn"
        >&nbsp; &nbsp;苏ICP备19021948号</a>
      </p>
      <div style="margin:0 auto;" class="safe">
        <a
          target="_blank"
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32011502010943"
          style="display:inline-block;text-decoration:none;height:20px;line-height:20px;margin-left: -2px"
        >
          <img src="~assets/images/safe.png" style="float:left; width: 20px" />
          <p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#fff;">
            苏公网安备
            32011502010943号
          </p>
        </a>
      </div>
    </div>
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
.case {
  width: 100%;
  .banner {
    padding-top: 70px;
    padding-left: 120px;
    position: relative;
    height: 450px;
    background: #6486d2;
    color: #fff;
    .left {
      max-width: 530px;
    }
    img {
      height: 100%;
      position: absolute;
      right: 40px;
      top: 45px;
      width: 494px;
      height: 383px;
    }
    h3 {
      margin-bottom: 25px;
      line-height: 1;
      font-size: 34px;
      font-weight: 400;
    }
    .platform {
      font-size: 18px;
      white-space: nowrap;
      color: #fff;
      height: 30px;
      line-height: 30px;
      span {
        padding: 0 9px;
      }
    }
    .desc {
      font-size: 16px;
      color: rgba(255, 255, 255, 0.65);
      margin-top: 54px;
      line-height: 1.8;
    }
  }
  .title {
    font-size: 26px;
    margin-top: 60px;
    margin-bottom: 28px;
    line-height: 1;
    text-align: center;
  }
  .desc {
    font-size: 18px;
    color: #7c7e7d;
    line-height: 1;
    margin-bottom: 72px;
    text-align: center;
  }
  .info {
    text-align: center;
    img {
      // width: 80%;
    }
  }
  .all {
    display: flex;
    .item {
      flex: 1;
      p {
        font-size: 16px;
        color: #535353;
        line-height: 1;
        margin-bottom: 84px;
      }
    }
  }
  .platform .fa {
    margin-right: -13px;
  }
  .geo {
    height: 571px;
    width: 100%;
    background-image: url(/web/public/dist/images/product_service/search/geocoder.7a40aa.png),
      linear-gradient(to right, #58baff, #2f5dc8);
    text-align: center;
    img {
      width: 100%;
    }
  }
  .system {
    width: 100%;
    text-align: center;
    img {
      width: 80%;
    }
  }
  .footer {
    padding: 58px 100px 0 180px;
    width: 100%;
    height: 297px;
    background: #1d2128;
    color: #fff;
    font-size: 14px;
    .logo {
      display: inline-block;
      width: 165px;
      height: 49px;
    }
    > p {
      opacity: 0.56;
      font-size: 14px;
      line-height: 20px;
      margin: 46px 0 10px 0;
      text-indent: 1px;
      padding-left: 5px;
    }
    .safe {
      display: inline-block;
      text-decoration: none;
      height: 20px;
      line-height: 20px;
      margin-left: -2px;
      padding-left: 5px;
      color: #fff;
      opacity: 0.56;
    }
  }
}
</style>>
