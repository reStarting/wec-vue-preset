module.exports = (api, projectOptions) => {
  api.chainWebpack(config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => ({
        ...options,
        transformAssetUrls: {
          Icon: 'src'
        }
      }));
  })
}