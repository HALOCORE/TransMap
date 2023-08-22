function f_gold(s, c) {
  var res = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[i] == c) res = res + 1;
  }
  return res;
}

