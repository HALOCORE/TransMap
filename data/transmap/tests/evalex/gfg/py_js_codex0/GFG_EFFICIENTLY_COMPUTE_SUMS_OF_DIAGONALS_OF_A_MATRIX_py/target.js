function f_gold(mat, n) {
  let principal = 0;
  let secondary = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i == j) principal += mat[i][j];
      if ((i + j) == (n - 1)) secondary += mat[i][j];
    }
  }
  console.log("Principal Diagonal:", principal);
  console.log("Secondary Diagonal:", secondary);
}

