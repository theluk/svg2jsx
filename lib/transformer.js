const flow = require('lodash.flow')
const reactify = require('css-to-react-native').default
const camelize = require('camel-case')
const { stringify } = require('html-parse-stringify')
const { parseCSS } = require('./parser')

/**
 * @constant
 * @type {Object}
 */
const ATTRIBUTES = {
  class: 'className'
}

/**
 * Transform CSS to inline React CSS
 * @param {String} css - the css string
 */
const transformCSS = flow(
  parseCSS,
  reactify
)

/**
 * Traverse AST and apply transformation
 * @param {Object} ast - the SVG syntax tree
 */
const traverse = ast => {
  return ast.map(node => {
    // do stuff here
    return node
  })
}

/**
 * Transform AST to React JSX string
 * @param {Object} ast
 */
const transform = flow(
  traverse,
  stringify
)

module.exports = {
  transform
}
