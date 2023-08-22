function f_gold(mat, N) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (mat[i][j] != mat[j][i]) return false;
    }
  }
  return true;
}

