function f_gold(n, x) {
  let cnt = 0;
  for (let i = 1; i <= n; i++) {
    if (i <= x) {
      if (x / i <= n && x % i == 0) cnt++;
    }
  }
  return cnt;
}

