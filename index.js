const { optimize } = require('./lib/optimizer')
const { parse } = require('./lib/parser')
const { transform } = require('./lib/transformer')

optimize(`
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
    <g>
    <path style="padding-right:30px;" d="M50.049,0.3c14.18,0.332,25.969,5.307,35.366,14.923S99.675,36.9,100,51.409c-0.195,11.445-3.415,21.494-9.658,30.146 - yadda yadda yadda"/>
    </g>
  </svg>`)
  .then(parse)
  .then(transform)
  .then(console.log)