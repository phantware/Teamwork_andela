describe('TEST Lib', () => {
  const sum = (a, b) => a + b;
  it('should return the sum of two numbers', () => {
    const result = sum(1, 2);
    //   if (result !== 3) {
    //     throw new Error('sum is not working as expected');
    //   }
    expect(result).toBe(3);
  });
  test('some functions', () => {});
});
