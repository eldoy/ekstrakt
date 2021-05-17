const emoji = require('emoji-regex')()

module.exports = function(input) {
  const matches = input
    .replace(emoji, ' ')
    .replace(/(?<=\s|^)([a-z0-9.-_@])\s?(?=[a-z0-9.-_@](?:\s|$))/g, '$1')
    .replace(/\s+at\s+/g, '@')
    .replace(/\s+dot\s+/g, '.')
    .replace(/\s*<at>\s*/g, '@')
    .replace(/\s*<dot>\s*/g, '.')
    .replace(/\s*\(at\)\s*/g, '@')
    .replace(/\s*\(dot\)\s*/g, '.')
    .replace(/\s*\[at\]\s*/g, '@')
    .replace(/\s*\[dot\]\s*/g, '.')
    .replace(/[^ -~]/g, ' ')
    .trim()
    .toLowerCase()
    .match(/(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/g)

  if (!matches) return []
  return matches.filter((email, i, self) => i == self.indexOf(email))
}
