const calculator = require('./calculator');

// addition
test('adds two numbers', () => {
  expect(calculator.add(3, 9)).toBe(12);
});

test('returns error if an argument is not a number', () => {
  expect(calculator.add('3', 6)).toMatch(/Please enter two numbers/)
});

// subtraction
test('subtract one positive number from another', () => {
  expect(calculator.subtract(9, 3)).toBe(6);
});

test('returns error if an argument is not a number', () => {
  expect(calculator.subtract('6', 3)).toMatch(/Please enter two numbers/)
});

test('subtraction works with negative values', () => {
  expect(calculator.subtract(-4, -5)).toBe(1)
});
