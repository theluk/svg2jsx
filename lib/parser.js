const parser = require('svg-parser')

/**
 * Stringify attributes
 * @param {Object} attributes - the node attributes
 */
const stringifyAttrs = attrs => {

  const attributes = []

  for (let attr in attrs) {
    attributes.push(`${attr}=${attrs[attr]}`)
  }

  return attributes.length ? attributes.join(' ') : ''

}

/**
 * Stringify node
 * @param {Object} node - the node
 */
const stringifyNode = (buffer, node) => {
  
  const isParent = node.children.length
  const attributes = stringifyAttrs(node.attributes)
  const element = buffer + `<${node.name} ${attributes}` + (isParent ? '>' : '/>')

  if (isParent) {

    const childrens = node.children.reduce(stringifyNode, '')

    return element + childrens + `</${node.name}>`

  }

  return element

}

/**
 * Stringify AST
 * @param {Object} ast - the SVG ast
 */
const stringify = ast => {
  
  return ast.reduce((accumulator, node) =>
    accumulator + stringifyNode('', node), '')

}

/**
 * Parse CSS
 * @param {String} css - the css string
 */
const parseStyle = css => {

  return css
    .replace(/\s/g, '')
    .split(';')
    .map(group => group.split(':'))
    .filter(([ prop ]) => prop)
    
}

/**
 * Parse SVG
 * @param {String} svg - the SVG string
 */
const parse = svg => [parser.parse(svg)]

module.exports = {
  stringify,
  parse,
  parseStyle
}
