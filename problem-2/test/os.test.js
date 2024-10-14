const { getFreeRAM } = require("../src/os");

test('Check if free ram is greater than zero', () => {
    expect(getFreeRAM()).toBeGreaterThan(0);
});
