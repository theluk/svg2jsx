const { optimize } = require('./lib/optimizer')
const { parse } = require('./lib/parser')
const { transform } = require('./lib/transformer')

const svg = `
<svg id="Layer_1" class="test-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <g x="5" fill="blue">
    <path style="fill: red;margin-left: 10px;padding-right:20px" class="cls-20" d="M27.13,75h19.5l-5-15.5H23.5a1,1,0,0,0-.95,1.31Z"/>
  </g>
</svg>
`

optimize(svg)
  .then(parse)
  .then(transform)
  .then(console.log)