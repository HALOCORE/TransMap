function f_gold(gold, m, n) {
  let goldTable = Array(m).fill().map(_ => Array(n).fill(0))
  for (let col = n - 1; col >= 0; col--) {
    for (let row = 0; row < m; row++) {
      if (col == n - 1) var right = 0;
      else right = goldTable[row][col + 1];
      if (row == 0 || col == n - 1) var right_up = 0;
      else right_up = goldTable[row - 1][col + 1];
      if (row == m - 1 || col == n - 1) var right_down = 0;
      else right_down = goldTable[row + 1][col + 1];
      goldTable[row][col] = gold[row][col] + Math.max(right, right_up, right_down);
    }
  }
  let res = goldTable[0][0];
  for (let i = 1; i < m; i++) res = Math.max(res, goldTable[i][0]);
  return res;
}

