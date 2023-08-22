function f_gold(stri, n) {
  var m = {};
  for (var i = 0; i < n; i++) m[stri[i]] = (m[stri[i]] || 0) + 1;
  var res = 0;
  for (var i of Object.values(m)) {
    if (i == 2) res += 1;
  }
  return res;
}

