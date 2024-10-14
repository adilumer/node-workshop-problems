const { isPalindrome } = require('../src/');

test('checks if "A man, a plan, a canal, Panama" is a palindrome', () => {
    expect(isPalindrome("A man, a plan, a canal, Panama")).toBe(true);
});

test('checks if "No lemon, no melon" is a palindrome', () => {
    expect(isPalindrome("No lemon, no melon")).toBe(true);
});

test('checks if "hello" is a palindrome', () => {
    expect(isPalindrome("hello")).toBe(false);
});

test('checks if an empty string is a palindrome', () => {
    expect(isPalindrome("")).toBe(true); // Empty string is considered a palindrome
});

test('checks if "Was it a car or a cat I saw?" is a palindrome', () => {
    expect(isPalindrome("Was it a car or a cat I saw?")).toBe(true);
});
