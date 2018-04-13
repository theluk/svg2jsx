const { optimize } = require('./lib/optimizer')
const { parse } = require('./lib/parser')
const { transform } = require('./lib/transformer')

/**
 * Transform and optimize SVG to valid React SVG
 * @param {String} svg - the svg string
 */
const svg2jsx = svg => {

  return optimize(svg)
    .then(parse)
    .then(transform)

}
	
module.exports = svg2jsx
