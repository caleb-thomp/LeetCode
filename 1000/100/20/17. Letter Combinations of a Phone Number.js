function letterCombinations(digits) {
  if (!digits || digits.length === 0) {
    return []; // If input is empty or null, return an empty array
  }
  const digitToLetterMap = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };
  const result = []; // Array to store the combinations
  const dfs = (index, current) => {
    if (index === digits.length) {
      result.push(current); // If all digits are processed, add current combination to the result array
      return;
    }
    const letters = digitToLetterMap[digits[index]]; // Get the letters corresponding to the current digit
    for (let i = 0; i < letters.length; i++) {
      dfs(index + 1, current + letters[i]); // Recursively combine each letter with the next digits
    }
  };
  dfs(0, ''); // Start the depth-first search with the first digit
  return result;
}
