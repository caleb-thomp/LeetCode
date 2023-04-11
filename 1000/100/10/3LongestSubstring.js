function lengthOfLongestSubstring(s) {
  let maxLen = 0;
  let left = 0;
  const charIndexMap = {};

  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];
    const prevIndex = charIndexMap[currentChar];
    if (prevIndex !== undefined && prevIndex >= left) {
      left = prevIndex + 1;
    }
    charIndexMap[currentChar] = right;
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}
