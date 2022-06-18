function reverse(string) {
  return string.split('')
    .reverse()
    .join('')
    .replace(/\s+/g, ' ')
    .trim()
};
module.exports = reverse
