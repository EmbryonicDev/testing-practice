const capitalize = require('./capitalize');

test('capitalizes single word', () => {
  expect(capitalize("prosperity")).toMatch(/Prosperity/)
});

test('capitalizes more than one word', () => {
  expect(capitalize("i wish you the life of happiness and prosperity")).toMatch(/I Wish You The Life Of Happiness And Prosperity/)
});

test('returns case sensitive string', () => {
  expect(capitalize("conVerT MixEd sTrinG to CapitaliZed String")).
    toMatch(/Convert Mixed String To Capitalized String/)
});