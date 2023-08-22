function f_gold(N, K) {
  var ans = 0;
  for (var i = 1; i <= N; i++) ans += (i % K);
  return ans;
}

