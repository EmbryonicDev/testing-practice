const reverse = require('./reverse')

test('reverse single word', () => {
  expect(reverse("sdrawkcab")).toMatch(/backwards/)
});

test('reverse multiple word string', () => {
  expect(reverse('desrever neeb sah gnirts siht')).toMatch(/this string has been reversed/)
});