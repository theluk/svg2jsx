const flow = require('lodash.flow')
const camelize = require('camel-case')
const reactify = require('css-to-react-native').default
const { stringify } = require('html-parse-stringify')
const { parseStyle } = require('./parser')

/**
 * Remove extra quotes and prettify
 * @param {String} svg - the svg string
 */
const prettify = svg => {
  return svg
}

/**
 * Transform CSS to inline React CSS
 * @param {String} css - the css string
 */
const transformStyle = flow(
  parseStyle,
  reactify,
  JSON.stringify
)

/**
 * @constant
 */
const CUSTOM_ATTRIBUTES = {
  class: 'className'
}

/**
 * @constant
 */
const CUSTOM_VALUES = {
  style: transformStyle
}


/**
 * Traverse AST and apply transformation
 * @param {Object} ast - the SVG syntax tree
 */
const traverse = ast => {

  return ast.map(node => {

    const attributes = {}

    for (let attr in node.attrs) {
      const value = node.attrs[attr]
      const modifiedAttr = CUSTOM_ATTRIBUTES[attr] || camelize(attr)
      const modifiedValue = CUSTOM_VALUES[attr] ? CUSTOM_VALUES[attr](value) : value

      attributes[modifiedAttr] = modifiedValue
    }

    // set transformed attributes
    node.attrs = attributes

    // traverse childrens
    if (node.children.length) {
      traverse(node.children)
    }

    // return modified node
    return node
    
  })

}

/**
 * Transform AST to React JSX string
 * @param {Object} ast
 */
const transform = flow(
  traverse,
  stringify,
  prettify
)

module.exports = {
  transform
}
