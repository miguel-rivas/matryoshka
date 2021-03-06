module.exports = {
  lintOnSave: false,

  // devServer: {
  //   host: 'mr',
  //   port: 8022
  // },

  publicPath: process.env.NODE_ENV === 'production' ? '/matryoshka/' : '/',

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
      enableBridge: false
    }
  }
}
