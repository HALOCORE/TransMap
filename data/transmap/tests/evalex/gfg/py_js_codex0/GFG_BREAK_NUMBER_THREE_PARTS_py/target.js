function f_gold(n) {
  let count = 0;
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      for (let k = 0; k <= n; k++) {
        if (i + j + k == n) count = count + 1;
      }
    }
  }
  return count;
}

