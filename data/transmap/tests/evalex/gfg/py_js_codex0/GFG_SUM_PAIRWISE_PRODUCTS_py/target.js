function f_gold(n) {
  let sm = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = i; j <= n; j++) sm = sm + i * j;
  }
  return sm;
}

