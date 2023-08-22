function f_gold(s) {
  var n = s.length;
  for (var i = 1; i < n; i++) {
    if (s[i] != s[0]) return false;
  }
  return true;
}

