const matcher = /(.*)<(.*)>/

module.exports = function(input, m) {
  if (m = matcher.exec(input)) return [m[1].trim(), m[2].trim()]
  return input.includes('@') ? ['', input.trim()] : [input.trim(), '']
}
