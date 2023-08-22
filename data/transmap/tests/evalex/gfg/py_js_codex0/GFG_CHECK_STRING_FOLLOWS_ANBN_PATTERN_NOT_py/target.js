function f_gold(str) {
  var n = str.length;
  for (var i = 0; i < n; i++) {
    if (str[i] != 'a') break;
  }
  if (i * 2 != n) return false;
  for (var j = i; j < n; j++) {
    if (str[j] != 'b') return false;
  }
  return true;
}

