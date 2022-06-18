const reverse = require('./reverse')

test('reverse single word', () => {
  expect(reverse("sdrawkcab")).toMatch(/backwards/)
});

test('reverse multiple word string', () => {
  expect(reverse('desrever neeb sah gnirts siht')).toMatch(/this string has been reversed/)
});

test('reverse & removes extra white spaces', () => {
  expect(reverse('  devomer   secaps etihw dna desrever  ')).toMatch(/reversed and white spaces removed/)
});

test('reverse string of numbers', () => {
  expect(reverse('54321')).toMatch(/12345/)
})