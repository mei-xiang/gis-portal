module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // vue-cli3.0 起别名后 HTML中引入的文件不生效，就在前面添加~
        assets: '@/assets',
        components: '@/components',
        network: '@/network',
        views: '@/views',
        common: '@/common'
      }
    }
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    https: false,
    hotOnly: false,
    open: true //配置自动启动浏览器
  }
}
