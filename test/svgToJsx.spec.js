const test = require('tape')
const transform = require('../')

test('SVG2JSX - removes XML processing instructions', t => {

  const excepted = '<svg/>'

  return transform(`<?xml version="1.0" encoding="iso-8859-1"?><svg/>`)
    .then(actual => {

      t.deepEqual(actual, excepted,
        'SVG2JSX should remove `<?xml version="1.0" encoding="iso-8859-1"?>`')

      t.end()

    })

})

test('SVG2JSX - cleanup attributes', t => {

  const excepted = '<svg id="test"/>'

  return transform(`<svg
      id=" test "
    />`)
    .then(actual => {

      t.deepEqual(actual, excepted,
        'SVG2JSX should cleanup attributes values from newlines, trailing and repeating spaces')

      t.end()

    })

})

test('SVG2JSX - convert attributes', t => {

  const excepted = '<svg fillRule="evenodd"/>'

  return transform('<svg fill-rule="evenodd"/>')
    .then(actual => {

      t.deepEqual(actual, excepted,
        'SVG2JSX should convert attributes')

      t.end()

    })

})

test('SVG2JSX - convert styles to attributes', t => {

  const excepted = '<svg fill="red"/>'

  return transform('<svg style="fill:red"/>')
    .then(actual => {

      t.deepEqual(actual, excepted,
        'SVG2JSX should convert styles to attributes')

      t.end()

    })

})

test('SVG2JSX - convert inline style to Javascript', t => {

  const excepted = '<svg style={{marginLeft:20,paddingTop:20}}/>'

  return transform('<svg style="margin-left:20px;padding-top:20px;"/>')
    .then(actual => {

      t.deepEqual(actual, excepted,
        'SVG2JSX should convert inline styles to Javascript object')

      t.end()

    })

})