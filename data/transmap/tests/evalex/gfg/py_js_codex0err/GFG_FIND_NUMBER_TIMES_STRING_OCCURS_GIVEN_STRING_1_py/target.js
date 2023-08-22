function f_gold(a, b) {
  var m = a.length;
  var n = b.length;
  var lookup = [[0] * (n + 1) for (i = 0; i < (m + 1); i++)];
  for (i = 0; i < (n + 1); i++) lookup[0][i] = 0;
  for (i = 0; i < (m + 1); i++) lookup[i][0] = 1;
  for (i = 1; i < (m + 1); i++) {
    for (j = 1; j < (n + 1); j++) {
      if (a[i - 1] == b[j - 1]) lookup[i][j] = lookup[i - 1][j - 1] + lookup[i - 1][j];
      else lookup[i][j] = lookup[i - 1][j];
    }
  }
  return lookup[m][n];
}

