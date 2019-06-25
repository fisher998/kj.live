module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : './',
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  css: {
    modules: false, // 是否开启支持‘foo.module.css’样式
    sourceMap: false, // 开启 CSS source maps?
    extract: false // 是否使用css分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用<style>方式内联至html文件中
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://api.tiyu.caishencai.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      },
    }
  }
}