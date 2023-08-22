function f_gold(n, m) {
  let count = [];
  for (let i = 0; i < n + 2; i++) count.push(0);
  count[0] = 0;
  for (let i = 1; i < n + 1; i++) {
    if (i > m) count[i] = count[i - 1] + count[i - m];
    else if (i < m) count[i] = 1;
    else count[i] = 2;
  }
  return count[n];
}

