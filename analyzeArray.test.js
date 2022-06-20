const analyzeArray = require('./analyzeArray');

test('returns average, minimum, maximum & length values of array with numbers', () => {
  expect(analyzeArray([14, 8, 15, 23, 47]))
    .toEqual({
      average: 21,
      min: 8,
      max: 47,
      length: 5
    })
});

test('returns error if any array value != Number', () => {
  expect(analyzeArray([14, 8, '15', 23, 47]))
    .toMatch(/Please only enter an array with NUMBERS/)
});