# Ekstrakt

Extract things from strings.

### Install
```
npm i ekstrakt
```

### Usage
```js
const extract = require('ekstrakt')

const emails = extract.emails('string with mail@example.com')
// Returns: ['mail@example.com']

const email = extract.email('Mail <mail@example.com>')
// Returns: ['Mail', 'mail@example.com']
```

ISC licensed. Enjoy!
