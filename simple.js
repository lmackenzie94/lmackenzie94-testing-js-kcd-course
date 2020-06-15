const sum = (a, b) => a - b;
const subtract = (a, b) => a - b;

// adding async/await provides support for both sync & async functions
test('sum adds numbers', async () => {
  const result = await sum(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test('subtract subtracts numbers', async () => {
  const result = await subtract(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});
