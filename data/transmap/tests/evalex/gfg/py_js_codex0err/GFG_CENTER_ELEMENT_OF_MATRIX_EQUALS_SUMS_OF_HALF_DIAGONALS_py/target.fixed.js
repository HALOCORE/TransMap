function f_gold(mat, n) {
  let diag1_left = 0;
  let diag1_right = 0;
  let diag2_left = 0;
  let diag2_right = 0;
  let i = 0;
  let j = n - 1;
  while (i < n) {
    if (i < Math.floor(n / 2)) {
      diag1_left += mat[i][i];
      diag2_left += mat[j][i];
    }
    else if (i > Math.floor(n / 2)) {
      diag1_right += mat[i][i];
      diag2_right += mat[j][i];
    }
    i += 1;
    j -= 1;
  }
  return (diag1_left == diag2_right && diag2_right == diag2_left && diag1_right == diag2_left && diag2_right == mat[Math.floor(n / 2)][Math.floor(n / 2)]);
}


