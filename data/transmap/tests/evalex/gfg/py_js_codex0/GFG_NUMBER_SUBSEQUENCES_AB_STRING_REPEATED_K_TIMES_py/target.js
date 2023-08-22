function f_gold(s, K) {
  var n = s.length;
  var c1 = 0;
  var c2 = 0;
  var C = 0;
  for (var i = 0; i < n; i++) {
    if (s[i] == 'a') c1 += 1;
    if (s[i] == 'b') {
      c2 += 1;
      C += c1;
    }
  }
  return C * K + (K * (K - 1) / 2) * c1 * c2;
}

