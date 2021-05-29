module.exports = function(email) {
  return email
    .split('@')[0]
    .replace(/\W/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .map(part => part[0].toUpperCase() + part.slice(1))
    .join(' ')
}