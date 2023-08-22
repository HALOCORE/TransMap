function f_gold(n) {
  var DP = Array(n + 1);
  DP[0] = 0;
  DP[1] = 1;
  for (var i = 2; i <= n; i++) {
    if (parseInt(i % 2) == 0) DP[i] = DP[parseInt(i / 2)];
    else DP[i] = DP[parseInt((i - 1) / 2)] + DP[parseInt((i + 1) / 2)];
  }
  return DP[n];
}

