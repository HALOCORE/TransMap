function f_gold(N) {
  let ans = 0;
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) ans += Math.floor(i / j);
  }
  return ans;
}

