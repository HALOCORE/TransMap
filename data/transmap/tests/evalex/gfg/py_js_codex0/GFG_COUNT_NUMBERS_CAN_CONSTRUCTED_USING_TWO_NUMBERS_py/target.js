function f_gold(n, x, y) {
  var arr = new Array(n + 2);
  for (var i = 0; i < n + 2; i++) {
    arr[i] = false;
  }
  if (x <= n) arr[x] = true;
  if (y <= n) arr[y] = true;
  var result = 0;
  for (var i_1 = Math.min(x, y); i_1 <= n; i_1++) {
    if (arr[i_1]) {
      if (i_1 + x <= n) arr[i_1 + x] = true;
      if (i_1 + y <= n) arr[i_1 + y] = true;
      result = result + 1;
    }
  }
  return result;
}

