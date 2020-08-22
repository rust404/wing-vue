module.exports = {
  title: 'Wing UI',
  description: "一个轻量级的Vue UI组件库",
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '组件', link: '/components/guide/install.html' },
    ],
    sidebar: {
      '/components/': [
        {
          title: '快速上手',
          collapsable: false
        },
        {
          title: '组件列表',
          collapsable: false,
          children: [
            'basic/button'
          ]
        }
      ]
    }
  }
}
