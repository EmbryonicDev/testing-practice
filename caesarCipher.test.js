const caesarCipher = require('./caesarCipher');

test('tests wrapping from z to a', () => {
  expect(caesarCipher("xyz", 1)).toMatch(/yza/)
});

test('test with multiple words', () => {
  expect(caesarCipher('this works just fine', 1))
    .toMatch(/uijt xpslt kvtu gjof/)
});

test('Case Sensitive Test', () => {
  expect(caesarCipher('Title Case Test', 5))
    .toMatch(/Ynyqj Hfxj Yjxy/)
});

test('sentence with punctuation', () => {
  expect(caesarCipher('Sentence: with punctuation!', 9))
    .toMatch(/Bnwcnwln: frcq ydwlcdjcrxw!/)
});
