const alias = require('@rollup/plugin-alias')
const path = require('path')

const projectRoot = path.resolve(__dirname, '../')

const baseConfig = {
  input: 'src/wing.js',
  plugins: {
    preVue: [
      alias({
        resolve: ['.js', '.jsx', '.vue'],
        entries: {
          '@': path.resolve(projectRoot, 'src'),
        },
      }),
    ],
    vue: {
      css: false,
      template: {
        isProduction: true,
      },
    },
    babel: {
      exclude: 'node_modules/**',
      extensions: ['.js', '.jsx', '.vue'],
      presets: [
        ['@babel/preset-env',]
      ]
    },
  },
  external: [
    'vue',
    /@wing-ui\/icons-vue.*/,
    '@popperjs/core'
  ],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
};

module.exports = baseConfig
