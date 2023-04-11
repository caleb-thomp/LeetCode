function reverse(x) {
  const isNegative = x < 0;
  x = Math.abs(x);
  let reversed = 0;

  while (x > 0) {
    const digit = x % 10;
    reversed = reversed * 10 + digit;
    x = Math.floor(x / 10);
  }

  if (reversed > 2 ** 31 - 1) {
    return 0;
  }

  return isNegative ? -reversed : reversed;
}

var reverse2 = function(x) {
  const absReversed = Math.abs(x).toString().split('').reverse().join('');
  if (absReversed > 2**31 - 1) return 0;
  return absReversed * Math.sign(x);
};


