const { parse } = require('html-parse-stringify')

/**
 * Parse CSS
 * @param {String} css - the css string
 */
const parseCSS = css => {

  return css
    // remove white spaces and line breaks
    .replace(/\s/g, '')
    // parse css
    .split(';')
    .map(group => group.split(':'))
    .filter(([ prop ]) => prop)
    
}

/**
 * Parse SVG
 * @param {String} svg - the svg string
 */
module.exports = {
  parse,
  parseCSS
}
