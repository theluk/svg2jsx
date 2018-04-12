const { optimize } = require('./lib/optimizer')
const { parse } = require('./lib/parser')
const { transform } = require('./lib/transformer')

optimize(`
  <svg version="1.1" id="Layer_1" class="test" style="padding-right: 10px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
    <defs>
      <linearGradient id="linear-gradient" x1="293.33" y1="67.32" x2="81.07" y2="279.59" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#141414" stop-opacity="0"/>
        <stop offset="1" stop-color="#141414"/>
      </linearGradient>
      <linearGradient id="linear-gradient-2" x1="180.64" y1="340.02" x2="180.64" y2="248.55" xlink:href="#linear-gradient"/>
      <linearGradient id="linear-gradient-3" x1="168.65" y1="220.02" x2="168.65" y2="206.04" xlink:href="#linear-gradient"/>
    </defs>
  </svg>`)
  .then(parse)
  .then(transform)
  .then(console.log)