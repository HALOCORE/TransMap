function f_gold(s) {
  var p = -1;
  for (var i = 0; i < s.length; i++) {
    for (var j = i + 1; j < s.length; j++) {
      if (s[i] == s[j]) {
        p = i;
        break;
      }
    }
    if (p != -1) break;
  }
  return p;
}

