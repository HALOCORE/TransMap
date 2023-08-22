function f_gold(A, B, m, n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) A[i][j] -= B[i][j];
  }
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < n; j++) {
      if (A[i][j] - A[i][0] - A[0][j] + A[0][0] != 0) return -1;
    }
  }
  let result = 0;
  for (let i = 0; i < n; i++) result += Math.abs(A[i][0]);
  for (let j = 0; j < m; j++) result += Math.abs(A[0][j] - A[0][0]);
  return result;
}

