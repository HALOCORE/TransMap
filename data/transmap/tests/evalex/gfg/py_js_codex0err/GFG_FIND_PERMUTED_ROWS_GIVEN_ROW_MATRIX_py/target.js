function f_gold(mat, m, n, r) {
  let s = new Set();
  for (let j = 0; j < n; j++) s.add(mat[r][j]);
  for (let i = 0; i < m; i++) {
    if (i == r) continue;
    for (let j = 0; j < n; j++) {
      if (!s.has(mat[i][j])) {
        j = j - 2;
        break;
      }
    }
    if (j + 1 != n) continue;
    console.log(i);
  }
}

