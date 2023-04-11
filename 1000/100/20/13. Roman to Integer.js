var romanToInt = function(s) {
  const romanLookup = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    const currentSymbolValue = romanLookup[s[i]];
    const nextSymbolValue = romanLookup[s[i + 1]];
    if (nextSymbolValue > currentSymbolValue) {
      num -= currentSymbolValue;
    } else {
      num += currentSymbolValue;
    }
  }
  return num;
};



// Variant 2

var romanToInt = function(s) {
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    const currentSymbol = s[i];
    switch (currentSymbol) {
      case 'I':
        num += (s[i + 1] === 'V' || s[i + 1] === 'X') ? -1 : 1;
        break;
      case 'V':
        num += 5;
        break;
      case 'X':
        num += (s[i + 1] === 'L' || s[i + 1] === 'C') ? -10 : 10;
        break;
      case 'L':
        num += 50;
        break;
      case 'C':
        num += (s[i + 1] === 'D' || s[i + 1] === 'M') ? -100 : 100;
        break;
      case 'D':
        num += 500;
        break;
      case 'M':
        num += 1000;
        break;
    }
  }
  return num;
};