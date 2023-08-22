function f_gold(n, r, p) {
  let C = new Array(r + 1).fill(0);
  C[0] = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = Math.min(i, r); j >= 1; j--) C[j] = (C[j] + C[j - 1]) % p;
  }
  return C[r];
}

