<template>
  <div class="introduce">
    <gis-header></gis-header>
    <div>
      <div class="banner">
        <img src="~assets/images/banner.png" alt />
      </div>
      <h1>丰富的地图产品与服务</h1>
      <div class="product" style=" margin-bottom: 20px;">
        <a href="/v1/geocode/geo">
          <i class="fa fa-map-o"></i>
          <span>地理</span>
        </a>
        <a href="/v1/site/byid">
          <i class="fa fa-server"></i>
          <span>服务</span>
        </a>
        <a href="/v1/vehicle/cars">
          <i class="fa fa-car"></i>
          <span>车辆</span>
        </a>
        <a href="/v1/route/compute">
          <i class="fa fa-plane"></i>
          <span>行程</span>
        </a>
        <a href="/v1/point/convert-to-gad-location">
          <i class="fa fa-map-marker"></i>
          <span>坐标</span>
        </a>
        <a href="/v1/heatmap/query-disparity-heatmap-data">
          <i class="fa fa-pie-chart"></i>
          <span>热力图</span>
        </a>
      </div>
      <div class="server">
        <img src="~assets/images/server.png" alt />
      </div>
      <div class="travel">
        <h1 class>安全稳定，保障您的业务发展</h1>
        <div class="item">
          <img src="~assets/images/introduce/pic1.png" alt />
          <h2>稳定的服务可用性</h2>
          <p>超高的服务可用性，持续稳定支持您的业务发展</p>
        </div>
        <div class="item">
          <img src="~assets/images/introduce/pic2.png" alt />
          <h2>快速的服务响应</h2>
          <p>服务请求到达T3至完成处理的平均时长不超过200ms</p>
        </div>
        <div class="item">
          <img src="~assets/images/introduce/pic3.png" alt />
          <h2>全方位的技术支持</h2>
          <p>工单体系提供全方位的技术支持，更有技术支持专业版可供选择</p>
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
.introduce {
  width: 100%;
  .banner {
    img {
      width: 100%;
      display: inline-block;
    }
  }
  h1 {
    text-align: center;
    font-weight: 500;
    font-size: 25px;
    color: #1e2437;
    border: none !important;
  }
  .product {
    display: flex;
    justify-content: space-around;
    align-items: center;
    a {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      i {
        font-size: 24px;
      }
      span {
        padding-top: 10px;
      }
      &:hover {
        color: #3d6eff !important;
      }
    }
  }
  .server {
    width: 100%;
    img {
      width: 100%;
      display: block;
    }
  }
  .travel {
    width: 100%;
    background: linear-gradient(to right, #dee6f2, #f1f5ff);
    text-align: center;
    display: flex;
    padding-top: 120px;
    position: relative;
    h1 {
      position: absolute;
      transform: translateX(-50%);
      left: 50%;
      top: 20px;
      font-size: 28px;
      font-weight: 200;
      color: #1e2437;
      border: none !important;
    }
    .item {
      flex: 1;
      h2 {
        height: 58px;
        font-size: 22px;
        line-height: 58px;
        color: #222324;
        font-weight: 200;
      }
      p {
        height: 64px;
        line-height: 24px;
        font-size: 14px;
        color: #222324;
        font-weight: 200;
      }
      img {
        // width: 80%;
      }
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
