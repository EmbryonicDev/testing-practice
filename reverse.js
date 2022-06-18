function reverse(string) {
  if (string != NaN) string = String(string);
  return string.split('')
    .reverse()
    .join('')
    .replace(/\s+/g, ' ')
    .trim()
};
module.exports = reverse
