function convert(s, numRows) {
  if (numRows === 1) {
    return s;
  }

  const rows = new Array(numRows).fill('');
  let direction = -1;
  let row = 0;

  for (let i = 0; i < s.length; i++) {
    rows[row] += s[i];
    if (row === 0 || row === numRows - 1) {
      direction *= -1;
    }
    row += direction;
  }

  return rows.join('');
}
