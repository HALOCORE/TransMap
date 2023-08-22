function f_gold(n) {
  var table = Array(n + 1).fill(0);
  for (var i = 0; i <= n; i++) table[i] = n - i;
  for (var i = n; i >= 0; i--) {
    if (i % 2 == 0) table[i / 2] = Math.min(table[i] + 1, table[i / 2]);
    if (i % 3 == 0) table[i / 3] = Math.min(table[i] + 1, table[i / 3]);
  }
  return table[1];
}

