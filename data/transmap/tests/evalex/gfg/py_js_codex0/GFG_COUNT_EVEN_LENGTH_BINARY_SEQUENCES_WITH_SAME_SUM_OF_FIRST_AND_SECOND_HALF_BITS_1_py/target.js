function f_gold(n) {
  let nCr = 1;
  let res = 1;
  for (let r = 1; r <= n; r++) {
    nCr = (nCr * (n + 1 - r)) / r;
    res += nCr * nCr;
  }
  return res;
}

