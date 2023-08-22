function f_gold(s) {
  var result = 0;
  var n = s.length;
  for (var i = 0; i < n; i++) {
    for (var j = i; j < n; j++) {
      if (s[i] == s[j]) result = result + 1;
    }
  }
  return result;
}

