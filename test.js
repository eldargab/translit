var assert = require('assert')
var translit = require('./index')
var t = translit({
  'a': 'A',
  'bc': 'd',
  'b': 'B',
  'nothing': ''
})

assert.equal(t('asd'), 'Asd')
assert.equal(t('bank'), 'BAnk')
assert.equal(t('dbc'), 'dd')
assert.equal(t('foo nothing qux'), 'foo  qux')

console.log('Ok')
