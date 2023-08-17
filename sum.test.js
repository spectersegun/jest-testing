const sum = require('./sum');

test('it properlt adds two number', () => {
  expect(sum(1, 2)).toBe(3);
});
