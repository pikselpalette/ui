const { createConfig, babel, match, file, css } = require('webpack-blocks');
const less = require('webpack-blocks-less');

module.exports = {
  require: [
    './src/index.js'
  ],
  components: [
    'src/**/[A-Z]*.js'
  ],
  webpackConfig: createConfig([
    less(),
    babel(),
    css(),
    match(['*.gif', '*.jpg', '*.jpeg', '*.png', '*.webp', '*.woff', '*.woff2', '*.eot', '*.ttf', '*.otf', '*.svg'], [
      file()
    ])
  ])
}
