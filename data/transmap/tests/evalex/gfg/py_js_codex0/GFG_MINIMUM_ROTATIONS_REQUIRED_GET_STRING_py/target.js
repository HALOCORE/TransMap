function f_gold(str) {
  var tmp = str + str;
  var n = str.length;
  for (var i = 1; i <= n; i++) {
    var substring = tmp.substring(i, n);
    if (str == substring) return i;
  }
  return n;
}

