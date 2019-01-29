// const DIR_NAME = 'report-backend'
// const fs = require('fs')

module.exports = {
  // baseUrl: process.env.NODE_ENV === 'production' ?`/${DIR_NAME}/` : '/',
  // outputDir: DIR_NAME
  devServer: {
    disableHostCheck: true,
    host: '0.0.0.0',
    port: 8008
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "./src/styles/variables.scss";`
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
  }
}
