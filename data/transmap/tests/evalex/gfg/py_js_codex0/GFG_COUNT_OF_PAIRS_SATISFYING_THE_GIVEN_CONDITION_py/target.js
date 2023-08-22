function f_gold(a, b) {
  var s = String(b);
  var i = 0;
  while (i < s.length) {
    if (s[i] != '9') break;
    i++;
  }
  var result = 0;
  if (i == s.length) result = a * s.length;
  else result = a * (s.length - 1);
  return result;
}

