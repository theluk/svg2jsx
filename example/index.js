const fs = require('fs')
const path = require('path')
const svg2jsx = require('../')

const filepath = path.resolve(__dirname, 'test.svg')

fs.readFile(filepath, 'utf8', (error, data) => {

  if (error) throw new Error('😞 Something went wrong')

  // transform but keep ids
  return svg2jsx(data)
    .then(transformedSVG => console.log(transformedSVG))
    .catch(error => console.log(error))

})