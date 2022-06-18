const calculator = require('./calculator');

test('adds two numbers', () => {
  expect(calculator.add(3, 9)).toBe(12);
});

test('returns error if an argument is not a number', () => {
  expect(calculator.add('3', 6)).toMatch(/Please enter two numbers/)
})
