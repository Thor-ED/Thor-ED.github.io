const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath:
    process.env.NODE_ENV === 'production' ? '/Thor-ED.github.io/' : '/',
  transpileDependencies: true
})
