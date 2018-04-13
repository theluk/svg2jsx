# svg2jsx 🌓
> Tiny module for transforming SVG to valid JSX

[![npm version](https://badge.fury.io/js/%40balajmarius%2Fsvg2jsx.svg)](https://badge.fury.io/js/%40balajmarius%2Fsvg-to-jsx)

### Install ⚙

```
yarn add @balajmarius/svg2jsx --dev
```

### Test ⛱

```
yarn test
```

### Use 🛠

```javascript
const fs = require('fs')
const path = require('path')
const svg2jsx = require('@balajmarius/svg2jsx')

const filepath = path.resolve(__dirname, 'test.svg')

fs.readFile(filepath, 'utf8', (error, data) => {

  if (error) throw new Error('😞 Something went wrong')

  return svg2jsx(data)
    .then(transformedSVG => console.log(transformedSVG))
    .catch(error => console.log(error))

})
```
