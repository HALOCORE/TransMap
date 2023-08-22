function f_gold(mat, n) {
  let flip = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (mat[i][j] != mat[j][i]) flip += 1;
    }
  }
  return flip;
}

