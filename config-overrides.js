/* config-overrides.js */
module.exports = function override(config, env) {
  let loaders = config.module.rules.find((rule) => Array.isArray(rule.oneOf))
    .oneOf

  loaders.unshift({
    test: /\.less$/,
    use: [
      require.resolve('style-loader'),
      {
        loader: require.resolve('css-loader'),
        options: {
          modules: {
               localIdentName: '[local]--[hash:base64:5]'
          },
        },
      },
      {
        loader: require.resolve('less-loader'),
        options: {
          lessOptions: {
            strictMath: false,
            javascriptEnabled: true
          },
        },
      },
    ],
  })
  return config
}
