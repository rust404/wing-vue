module.exports = {
  // https://github.com/facebook/jest/issues/9395#issuecomment-583799300
  "presets": ["@babel/preset-env","@vue/babel-preset-jsx"],
  // https://github.com/facebook/jest/issues/3126#issuecomment-465926747
  "env": {
    "test": {
      "plugins": ["@babel/plugin-transform-runtime"]
    }
  }
}
