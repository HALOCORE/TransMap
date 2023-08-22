function f_gold(mat, n) {
  var transpose = [[0] * n] * n;
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) transpose[i][j] = mat[j][i];
  }
  var flip = 0;
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      if (transpose[i][j] != mat[i][j]) flip += 1;
    }
  }
  return Math.floor(flip / 2);
}

