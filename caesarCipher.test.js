const caesarCipher = require('./caesarCipher');

test('tests wrapping from z to a', () => {
  expect(caesarCipher("xyz", 1)).toMatch(/yza/)
});
