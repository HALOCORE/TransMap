function f_gold(m, n) {
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = 0; j < n; j++) sum = sum + Math.abs(m[i][j]);
    sum = sum - Math.abs(m[i][i]);
    if (Math.abs(m[i][i]) < sum) return false;
  }
  return true;
}

