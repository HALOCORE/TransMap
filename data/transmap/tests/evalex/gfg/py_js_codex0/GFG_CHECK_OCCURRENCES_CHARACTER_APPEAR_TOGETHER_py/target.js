function f_gold(s, c) {
  var oneSeen = false;
  var i = 0;
  var n = s.length;
  while (i < n) {
    if (s[i] == c) {
      if (oneSeen == true) return false;
      while (i < n && s[i] == c) i = i + 1;
      oneSeen = true;
    } else i = i + 1;
  }
  return true;
}

