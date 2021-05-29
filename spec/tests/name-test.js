const extract = require('../../index.js')

test('extracts name from email address', ({ t }) => {
  t.ok(extract.name('foo@bar.com'), 'Foo')
  t.ok(extract.name('foo.bar@baz.com'), 'Foo Bar')
  t.ok(extract.name('foo.bar.qux@baz.com'), 'Foo Bar Qux')
})
