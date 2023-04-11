function isValid(s) {
  const stack = []; // Create a stack to keep track of opening parentheses

  const parenthesesMap = new Map([
    [')', '('],
    ['}', '{'],
    [']', '[']
  ]); // Create a map to store the mappings of opening and closing parentheses

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // If the character is a closing parenthesis
    if (parenthesesMap.has(char)) {
      // Pop the top element from the stack if it's not empty,
      // otherwise assign a dummy value to match with the mapping
      const topElement = stack.length === 0 ? '#' : stack.pop();

      // Compare the popped element with the corresponding opening parenthesis
      if (parenthesesMap.get(char) !== topElement) {
        return false; // If they don't match, return false
      }
    } else {
      stack.push(char); // If it's an opening parenthesis, push it to the stack
    }
  }

  // If the stack is empty, all parentheses are valid, otherwise, there are unmatched parentheses
  return stack.length === 0;
}
