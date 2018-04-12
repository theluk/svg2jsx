const parser = require('svg-parser')

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
 * Stringify AST
 * @param {Object} ast - the SVG ast
 */
const stringify = ast => {
  return ast
}

/**
 * Parse SVG
 * @param {String} svg - the SVG string
 */
const parse = svg => [parser.parse(svg)]

module.exports = {
  parse,
  stringify,
  parseStyle
}
