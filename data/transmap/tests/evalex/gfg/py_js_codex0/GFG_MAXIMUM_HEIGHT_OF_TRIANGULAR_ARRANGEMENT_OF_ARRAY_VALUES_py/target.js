function f_gold(a, n) {
  var result = 1;
  for (var i = 1; i < n; i++) {
    var y = (i * (i + 1)) / 2;
    if (y < n) result = i;
    else break;
  }
  return result;
}

