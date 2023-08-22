
function f_gold(mat, n) {
  var res = 0;
  for (var i = 0; i < n; i++) {
    if (mat[i][i] == mat[i][n - i - 1]) res = res + 1;
  }
  return res;
}

