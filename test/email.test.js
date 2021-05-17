const test = require('ava')
const extract = require('../index.js')

test('extracts name and email from email address', (t) => {
  t.deepEqual(extract.email('foo@bar.com'), ['', 'foo@bar.com'])
  t.deepEqual(extract.email('<foo@bar.com>'), ['', 'foo@bar.com'])
  t.deepEqual(extract.email('Foo <foo@bar.com>'), ['Foo', 'foo@bar.com'])
  t.deepEqual(extract.email('Foo<foo@bar.com>'), ['Foo', 'foo@bar.com'])
  t.deepEqual(extract.email('Foo'), ['Foo', ''])
})
