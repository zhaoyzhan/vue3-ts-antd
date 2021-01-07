const path = require('path')
const name = '运营狮-scrm'

module.exports = {
  publicPath: '/', // TODO: Remember to change this to fit your need
  // lintOnSave: process.env.NODE_ENV === 'development',
//   pwa: {
//     name: name,
//     workboxPluginMode: 'InjectManifest',
//     workboxOptions: {
//       swSrc: path.resolve(__dirname, 'src/pwa/service-worker.js')
//     },
//     iconPaths: {
//       favicon32: 'favicon.ico',
//       favicon16: 'favicon.ico',
//       appleTouchIcon: 'favicon.ico',
//       maskIcon: 'favicon.ico',
//       msTileImage: 'favicon.ico'
//     }
//   },
  productionSourceMap: false,
  lintOnSave: false,
//   pluginOptions: {
//     'style-resources-loader': {
//       preProcessor: 'scss',
//       patterns: [
//         path.resolve(__dirname, 'src/styles/_variables.scss'),
//         path.resolve(__dirname, 'src/styles/_mixins.scss')
//       ]
//     }
//   },
  chainWebpack(config) {
    // Provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    config.set('name', name)
    config.resolve.symlinks(true)
    config
      .when(process.env.NODE_ENV !== 'development',
        config => {
          config
            .optimization.splitChunks({
              chunks: 'all',
              cacheGroups: {
                libs: {
                  name: 'chunk-libs',
                  test: /[\\/]node_modules[\\/]/,
                  priority: 10,
                  chunks: 'initial' // only package third parties that are initially dependent
                },
                elementUI: {
                  name: 'chunk-elementUI', // split elementUI into a single package
                  priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                  test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
                },
                commons: {
                  name: 'chunk-commons',
                  test: path.resolve(__dirname, 'src/components'),
                  minChunks: 3, //  minimum common number
                  priority: 5,
                  reuseExistingChunk: true
                }
              }
            })
          config.optimization.runtimeChunk('single')
        }
      ) 
  },
  devServer: {
    open: true,
    proxy: {
      '/api': {  
        target: 'http://test-ybapp.moliyan.com.cn/',     //http://gate.moliyan.net:88/scrm/apidoc    //http://test-ybapp.moliyan.com.cn/   //http://gate.moliyan.net:88/
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  css: {
    requireModuleExtension: true,
    sourceMap: true,
    loaderOptions: {
      sass: {
      },
      less: {
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: {
            'primary-color': '#5079FD',
            'success-color': '#5079FD',
            'vab-color-blue': '#5079FD',
            'vab-margin': '20px',
            'vab-padding': '20px',
            'vab-header-height': '65px',
          }
        },
      },
    },
  }
}

