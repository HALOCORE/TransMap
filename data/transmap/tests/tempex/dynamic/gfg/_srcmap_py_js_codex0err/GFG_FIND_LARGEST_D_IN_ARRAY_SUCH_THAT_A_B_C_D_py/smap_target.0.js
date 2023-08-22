function f_gold(S, n) {
  var found = false;
  S.sort();
  for (var i = n - 1; i >= 0; i--) {
    for (var j = 0; j < n; j++) {
      if (i == j) continue;
      for (var k = j + 1; k < n; k++) {
        if (i == k) continue;
        for (var l = k + 1; l < n; l++) {
          if (i == l) continue;
          if (S[i] == S[j] + S[k] + S[l]) {
            found = true;
            return S[i];
          }
        }
      }
    }
  }
  if (found == false) return -1;
}

