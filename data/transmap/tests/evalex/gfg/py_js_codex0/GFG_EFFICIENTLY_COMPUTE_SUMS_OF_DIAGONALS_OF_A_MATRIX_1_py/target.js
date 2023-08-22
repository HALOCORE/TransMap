function f_gold(mat, n) {
  let principal = 0;
  let secondary = 0;
  for (let i = 0; i < n; i++) {
    principal += mat[i][i];
    secondary += mat[i][n - i - 1];
  }
  console.log("Principal Diagonal:", principal);
  console.log("Secondary Diagonal:", secondary);
}

