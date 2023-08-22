function f_gold(m, n, x) {
  let table = [[0] * (x + 1)];
  for (let i = 0; i < n + 1; i++) {
    table[i] = [0] * (x + 1);
  }
  for (let j = 1; j < Math.min(m + 1, x + 1); j++) {
    table[1][j] = 1;
  }
  for (let i = 2; i < n + 1; i++) {
    for (let j = 1; j < x + 1; j++) {
      for (let k = 1; k < Math.min(m + 1, j); k++) {
        table[i][j] += table[i - 1][j - k];
      }
    }
  }
  return table[n][x];
}

