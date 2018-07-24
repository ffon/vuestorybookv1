const webpack = require("webpack");

module.exports = {
  baseUrl: undefined,
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: true,
  productionSourceMap: false,
  parallel: undefined,

  css: {
    modules: true,
    sourceMap: true,
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: `@import "@/style/variables.scss";
              @import "~bootstrap/scss/bootstrap.scss";`
      }
    }
  },
  lintOnSave: true,
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        Popper: "popper.js"
      })
    ],
    performance: {
      hints: false
    },
    optimization: {
      splitChunks: {
        chunks: "async",
        minSize: 30000,
        maxSize: 0,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        automaticNameDelimiter: "~",
        name: true,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10
          },
          jquery: {
            test: /[\\/]node_modules[\\/]jquery/,
            chunks: "all",
            name: "jquery",
            enforce: true,
            priority: 1
          },
          bootstrap: {
            test: /[\\/]node_modules[\\/]bootstrap/,
            chunks: "all",
            name: "bootstrap",
            enforce: true,
            priority: 1
          },
          popperjs: {
            test: /[\\/]node_modules[\\/]popper\.js/,
            chunks: "all",
            name: "popperjs",
            enforce: true,
            priority: 1
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          }
        }
      }
    }
  }
};
