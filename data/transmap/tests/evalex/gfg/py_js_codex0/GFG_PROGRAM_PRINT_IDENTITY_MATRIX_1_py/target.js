function f_gold(mat, N) {
  for (var row = 0; row < N; row++) {
    for (var col = 0; col < N; col++) {
      if (row == col && mat[row][col] != 1) return false;
      else if (row != col && mat[row][col] != 0) return false;
    }
  }
  return true;
}

