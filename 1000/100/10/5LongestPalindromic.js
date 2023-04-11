function longestPalindrome(s) {
  if (!s || s.length === 0) {
    return '';
  }

  let longest = '';

  for (let i = 0; i < s.length; i++) {
    // check odd length palindromes
    let left = i;
    let right = i;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    if (right - left - 1 > longest.length) {
      longest = s.substring(left + 1, right);
    }

    // check even length palindromes
    left = i;
    right = i + 1;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    if (right - left - 1 > longest.length) {
      longest = s.substring(left + 1, right);
    }
  }

  return longest;
}
