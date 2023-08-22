function f_gold(k, s1, s2) {
  var n = s1.length;
  var m = s2.length;
  var lcs = Array(n+1).fill().map(_ => Array(m+1).fill(0));
  var cnt = Array(n+1).fill().map(_ => Array(m+1).fill(0));
  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= m; j++) {
      lcs[i][j] = Math.max(lcs[i - 1][j], lcs[i][j - 1]);
      if (s1[i - 1] == s2[j - 1]) cnt[i][j] = cnt[i - 1][j - 1] + 1;
      if (cnt[i][j] >= k) {
        for (var a = k; a <= cnt[i][j]; a++) lcs[i][j] = Math.max(lcs[i][j], lcs[i - a][j - a] + a);
      }
    }
  }
  return lcs[n][m];
}

