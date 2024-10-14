const { createSHA256 } = require("../src/crypto");

test('Check if SHA256 function works', () => {
    expect(createSHA256("İSKİ")).toBe("f2fbc0b5f77827d06db011bb4ea3eed06a409c6dba9e86a3aa1984e9f1024457");
});
