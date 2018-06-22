const test = require('tape')
const svg2jsx = require('../')

test('svg2jsx - removes XML processing instructions', t => {

  const excepted = '<svg />'

  return svg2jsx('<?xml version="1.0" encoding="iso-8859-1"?><svg/>')
    .then(actual => {
      
      t.deepEqual(actual, excepted, 'should remove `<?xml version="1.0" encoding="iso-8859-1"?>`')
      t.end()

    })

})

test('svg2jsx - cleanup attributes', t => {

  const excepted = '<svg id="test" fill="red"/>'

  return svg2jsx('<svg id=" test " strok="blue" fill="   red"/>')
    .then(actual => {

      t.deepEqual(actual, excepted, 'svg2jsx should cleanup attributes values from newlines, trailing and repeating spaces')
      t.end()

    })

})

test('svg2jsx - convert attributes', t => {

  const excepted = '<svg className="svg2jsx" data-name="svg" fillRule="evenodd"/>'

  return svg2jsx('<svg class="svg2jsx" data-name="svg" fill-rule="evenodd"/>')
    .then(actual => {

      t.deepEqual(actual, excepted, 'svg2jsx should reactify attributes')
      t.end()

    })

})

test('svg2jsx - convert styles to attributes', t => {

  const excepted = '<svg fill="red" stroke="red"/>'

  return svg2jsx('<svg style="fill:red;stroke:red;"/>')
    .then(actual => {

      t.deepEqual(actual, excepted, 'svg2jsx should convert styles to attributes')
      t.end()

    })

})

test('svg2jsx - convert inline style to JS objects', t => {

  const excepted = '<svg style={{ marginLeft: 20, paddingTop: 20 }}/>'

  return svg2jsx('<svg style="margin-left:20px;padding-top:20px;"/>')
    .then(actual => {

      t.deepEqual(actual, excepted, 'svg2jsx should convert inline styles to JS object')
      t.end()

    })

})

test('svg2jsx - does not throw when children is undefined when node is a string', t => {

  return svg2jsx('<svg><text>Foo</text></svg>')
    .catch((e) => t.fail(e))
    .then(() => t.end())

})
