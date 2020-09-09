module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue'
  ],
  transform: {
    '^.+\\.vue$': require.resolve('vue-jest'),
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      require.resolve('jest-transform-stub'),
    '^.+\\.jsx?$': require.resolve('babel-jest')
  },
  transformIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: ['./test/setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|jpg|png)$': '<rootDir>/empty-module.js',
  },
  testEnvironment: 'jest-environment-jsdom',
  // serializer for snapshots
  snapshotSerializers: [
    'jest-serializer-vue'
  ],
  testMatch: [
    '**/__test__/*.spec.js'
  ],
  // https://github.com/facebook/jest/issues/6766
  testURL: 'http://localhost/',
  watchPlugins: [
    require.resolve('jest-watch-typeahead/filename'),
    require.resolve('jest-watch-typeahead/testname')
  ]
}
