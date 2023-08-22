function f_gold(mat, n, m) {
  var rowsum = Array(n).fill(0);
  var colsum = Array(m).fill(0);
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < m; j++) {
      if (mat[i][j] != 0) {rowsum[i] += 1;
      colsum[j] += 1;}
    }
  }
  var uniquecount = 0;
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < m; j++) {
      if (mat[i][j] != 0 && rowsum[i] == 1 && colsum[j] == 1) uniquecount += 1;
    }
  }
  return uniquecount;
}

