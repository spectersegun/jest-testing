const subtract = require('./subtract');

test('it properly subtracting two number', () => {
  expect(subtract(1, 2)).toBe(-1);
});
