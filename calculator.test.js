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

test('subtraction works with one negative & one positive value', () => {
  expect(calculator.subtract(-4, 5)).toBe(-9)
});

// multiplication
test('multiply one positive number from another', () => {
  expect(calculator.multiply(9, 3)).toBe(27);
});

test('returns error if an argument is not a number', () => {
  expect(calculator.multiply('6', 3)).toMatch(/Please enter two numbers/)
});

test('multiplication works with negative values', () => {
  expect(calculator.multiply(-4, -5)).toBe(20)
});

test('multiplication works with one negative & one positive value', () => {
  expect(calculator.multiply(-4, 5)).toBe(-20)
});

// division
test('divide one positive number from another', () => {
  expect(calculator.divide(9, 3)).toBe(3);
});

test('returns error if an argument is not a number', () => {
  expect(calculator.divide('6', 3)).toMatch(/Please enter two numbers/)
});

test('division works with negative values', () => {
  expect(calculator.divide(-20, -5)).toBe(4)
});

test('division works with one negative & one positive value', () => {
  expect(calculator.divide(-20, 5)).toBe(-4)
});

test('returns error when dividing by 0', () => {
  expect(calculator.divide(20, 0)).toMatch(/Cannot divide a number by 0/)
});