function f_gold(n, k) {
  let total = k;
  let mod = 1000000007;
  let same = 0;
  let diff = k;
  for (let i = 2; i <= n; i++) {
    same = diff;
    diff = total * (k - 1);
    diff = diff % mod;
    total = (same + diff) % mod;
  }
  return total;
}

