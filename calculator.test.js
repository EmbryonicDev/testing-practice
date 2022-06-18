const calculator = require('./calculator');

test('adds two numbers', () => {
  expect(calculator.add(3, 9)).toBe(12);
});
