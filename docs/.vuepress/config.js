const path = require('path')
module.exports = {
  chainWebpack (config) {
    config.resolve.alias.set('@', path.resolve(__dirname, '../../src'))
  },
  base: '/wing-vue-site/',
  title: 'Wing UI',
  description: "一个轻量级的Vue UI组件库",
  scss: {
    additionalData: `@import "~@/styles/index.scss";`,
  },
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/components/guide/install.html' },
    ],
    sidebar: {
      '/components/': [
        {
          title: '入门',
          collapsable: false,
          children: [
            'guide/install',
            'guide/quickStart',
            'guide/customize',
          ]
        },
        {
          title: '基础组件',
          collapsable: false,
          children: [
            'basic/button',
            'basic/icon',
            'basic/input',
            'basic/grid'
          ]
        },
        {
          title: '消息通知',
          collapsable: false,
          children: [
            'notify/message',
          ]
        },
        {
          title: '数据展示',
          collapsable: false,
          children: [
            'dataDisplay/tabs',
            'dataDisplay/tooltip',
            'dataDisplay/collapse',
          ]
        },
      ]
    }
  }
}
