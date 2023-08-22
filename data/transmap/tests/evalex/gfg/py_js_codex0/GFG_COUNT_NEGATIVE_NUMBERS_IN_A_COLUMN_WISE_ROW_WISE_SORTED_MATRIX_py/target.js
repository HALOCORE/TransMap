function f_gold(M, n, m) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (M[i][j] < 0) count += 1;
      else break;
    }
  }
  return count;
}

