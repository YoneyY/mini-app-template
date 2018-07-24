'use strict'
const utils = require('./utils')
// const config = require('../config')

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: true,
    extract: true
  }),
  cssSourceMap: true,
  cacheBusting: true,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}