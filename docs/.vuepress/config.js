module.exports = {
  title: 'CRender',
  description: 'Canvas矢量图形渲染插件',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  host: 'localhost',
  port: 5000,
  base: '/crender-document-code/',
  themeConfig: {
    selectText: '选择语言',
    label: '简体中文',
    nav: [
      {
        text: '指南',
        link: '/guide/'
      },
      {
        text: '扩展',
        link: '/extend/'
      },
      {
        text: '支持',
        link: '/support/'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/east-century-fex/crender'
      }
    ],
    sidebar: {
      '/guide/': [
        '',
        'crender',
        'graph',
        'style',
        'graphs'
      ],
      '/extend/': [
        ''
      ],
      '/support/': []
    }
  }
}
