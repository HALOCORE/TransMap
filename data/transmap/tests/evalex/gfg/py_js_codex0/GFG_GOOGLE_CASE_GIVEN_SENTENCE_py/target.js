function f_gold(s) {
  var n = s.length;
  var s1 = "";
  s1 = s1 + s[0].toLowerCase();
  var i = 1;
  while (i < n) {
    if (s[i] == ' ' && i <= n) {
      s1 = s1 + " " + s[i + 1].toLowerCase();
      i = i + 1;
    } else {
      s1 = s1 + s[i].toUpperCase();
    }
    i = i + 1;
  }
  return s1;
}

