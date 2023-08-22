function f_gold(str) {
  var n = str.length;
  var res = - 1;
  for (var i = 0; i < n - 1; i++) {
    for (var j = i + 1; j < n; j++) {
      if (str[i] == str[j]) res = Math.max(res, Math.abs(j - i - 1));
    }
  }
  return res;
}

