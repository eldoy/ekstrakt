const extract = require('../../index.js')

const fixtures = [
  'mail@example.com',
  'MAIL@EXAMPLE.COM',
  '：mail@example.com',
  '📧mail@example.com',
  'mail@example.com.',
  'foo mail@example.com bar',
  'foo mail [at] example   [dot]   com',
  'foo m a i l [at] e x a m p l e   [dot]   c o m',
  '<mail@example.com>',
  '【email: mail@example.com】',
  '<a href="/contact">contact: mail@example.com</a>',
  '"mailto:mail@example.com"',
]

for (const fixture of fixtures) {
  test('extracts email ("' + fixture + '")', ({ t }) => {
    t.ok(extract.emails(fixture)[0], 'mail@example.com')
  })
}

test('extracts multiple email addresses', ({ t }) => {
  t.deepEqual(extract.emails('foo@bar.com baz@qux.com'), [
    'foo@bar.com',
    'baz@qux.com'
  ])
})

test('extracts email (mail+test@example.com)', ({ t }) => {
  t.deepEqual(extract.emails('mail+test@example.com'), [
    'mail+test@example.com'
  ])
})

test('not excludes emails with invalid TLD (mail@example.png)', ({ t }) => {
  t.ok(extract.emails('mail@example.png')[0], 'mail@example.png')
})

test('removes duplicates email', ({ t }) => {
  t.deepEqual(extract.emails('mail@example.com mail@example.com'), [
    'mail@example.com'
  ])
})

test('normalizes different email formats', ({ t }) => {
  t.ok(extract.emails('MAIL@EXAMPLE.COM')[0], 'mail@example.com')
  t.ok(extract.emails('：mail@example.com')[0], 'mail@example.com')
  t.ok(extract.emails('📧mail@example.com')[0], 'mail@example.com')
  t.ok(extract.emails('m a i l [at] e x a m p l e [dot] c o m')[0], 'mail@example.com')
  t.ok(extract.emails('foo m a i l [at] e x a m p l e [dot] c o m bar')[0], 'mail@example.com')
  t.ok(extract.emails('mail[at]example[dot]co[dot]uk')[0], 'mail@example.co.uk')
  t.ok(extract.emails('mail[at]example[dot]com')[0], 'mail@example.com')
  t.ok(extract.emails('mail(at)example(dot)com')[0], 'mail@example.com')
  t.ok(extract.emails('mail [at] example   [dot]   com')[0], 'mail@example.com')
  t.ok(extract.emails('mail (at) example   (dot)   com')[0], 'mail@example.com')
  t.ok(extract.emails('mail <at> example   <dot>   com')[0], 'mail@example.com')
  t.ok(extract.emails('mail at example   dot   com')[0], 'mail@example.com')
})
