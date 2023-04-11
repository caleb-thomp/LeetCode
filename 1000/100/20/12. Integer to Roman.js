var intToRoman = function(num) {
  const romanLookup = [
    { value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' }
  ];
  let roman = '';
  let i = 0;
  while (num > 0) {
    if (num >= romanLookup[i].value) {
      roman += romanLookup[i].symbol;
      num -= romanLookup[i].value;
    } else {
      i++;
    }
  }
  return roman;
};