const Svgo = require('svgo')

/**
 * @constant
 * @type {Object}
 */
const CONFIG = {
  plugins: [
    { removeScriptElement: true },
    { removeStyleElement: true },
    { convertShapeToPath: false },
    { removeHiddenElems: false },
    { convertPathData: false },
    { mergePaths: false },
    { cleanupIDs: false },
    { removeTitle: true },
    { removeDesc: true },
  ]
}

/**
 * Optimize SVG
 * @param {String} svg - the svg string
 */
const optimize = svg => {
  const optimizer = new Svgo(CONFIG)
  
  return new Promise((resolve, reject) =>
    optimizer.optimize(svg, ({ error, data }) => error ? reject(error) : resolve(data)))
}

module.exports = {
  optimize
}
