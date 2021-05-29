const matcher = /(.*)<(.*)>/

module.exports = function(str, m) {
  if (m = matcher.exec(str)) return [m[1].trim(), m[2].trim()]
  return str.includes('@') ? ['', str.trim()] : [str.trim(), '']
}
