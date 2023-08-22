function f_gold(s) {
  var l = s.length;
  var i = 0;
  var j = l - 1;
  while (i <= j) {
    if (s[i] != s[j]) return false;
    i += 1;
    j -= 1;
  }
  return true;
}

