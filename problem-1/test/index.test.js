const { lengthOfLongestSubstring } = require('../src/');

test('finds the longest substring without repeating characters in "abcabcbb"', () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
});

test('finds the longest substring without repeating characters in "bbbbb"', () => {
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
});

test('finds the longest substring without repeating characters in "pwwkew"', () => {
    expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
});

test('finds the longest substring without repeating characters in an empty string', () => {
    expect(lengthOfLongestSubstring("")).toBe(0);
});

test('finds the longest substring without repeating characters in "abcdefg"', () => {
    expect(lengthOfLongestSubstring("abcdefg")).toBe(7);
});
