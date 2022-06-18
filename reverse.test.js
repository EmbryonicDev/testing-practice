const reverse = require('./reverse')

test('reverse single word', () => {
  expect(reverse("sdrawkcab")).toMatch(/backwards/)
});