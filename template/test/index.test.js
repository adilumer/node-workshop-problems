const { add } = require('../src/');

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

test('adds -1 + -2 to equal -3', () => {
    expect(add(-1, -2)).toBe(-3);
});

test('adds 4 + 6 to equal 10', () => {
    expect(add(4, 6)).toBe(10);
});
