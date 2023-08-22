function f_gold(M, n, m) {
  let count = 0;
  let i = 0;
  let j = m - 1;
  while (j >= 0 && i < n) {
    if (M[i][j] < 0) {
      count += (j + 1);
      i += 1;
    }
    else j -= 1;
  }
  return count;
}

