
function f_gold(mat, r, c) {
  var result = 0;
  for (var i = 0; i < r; i++) {
    var j = 0;
    for (j = 0; j < c - 1; j++) {
      if (mat[i][j + 1] <= mat[i][j]) break;
    }
    if (j == c - 2) result += 1;
  }
  for (var i = 0; i < r; i++) {
    var j = 0;
    for (j = c - 1; j > 0; j--) {
      if (mat[i][j - 1] <= mat[i][j]) break;
    }
    if (c > 1 && j == 1) result += 1;
  }
  return result;
}

