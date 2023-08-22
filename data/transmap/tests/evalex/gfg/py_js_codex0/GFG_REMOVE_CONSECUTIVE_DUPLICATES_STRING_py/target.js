function f_gold(S) {
  var n = S.length;
  if(n < 2) {
    return;
  }
  var j = 0;
  for(var i = 0;i < n;i++) {
    if(S[j] != S[i]) {
      j++;
      S[j] = S[i];
    }
  }
  j++;
  S = S.slice(0, j);
  return S;
}

