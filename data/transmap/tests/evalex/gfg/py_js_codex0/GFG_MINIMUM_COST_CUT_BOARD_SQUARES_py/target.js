function f_gold(X, Y, m, n) {
  var res = 0;
  X.sort(function (a, b) {
    return b - a;
  });
  Y.sort(function (a, b) {
    return b - a;
  });
  var hzntl = 1;
  var vert = 1;
  var i = 0;
  var j = 0;
  while (i < m && j < n) {
    if (X[i] > Y[j]) {
      res += X[i] * vert;
      hzntl += 1;
      i += 1;
    } else {
      res += Y[j] * hzntl;
      vert += 1;
      j += 1;
    }
  }
  var total = 0;
  while (i < m) {
    total += X[i];
    i += 1;
  }
  res += total * vert;
  total = 0;
  while (j < n) {
    total += Y[j];
    j += 1;
  }
  res += total * hzntl;
  return res;
}

