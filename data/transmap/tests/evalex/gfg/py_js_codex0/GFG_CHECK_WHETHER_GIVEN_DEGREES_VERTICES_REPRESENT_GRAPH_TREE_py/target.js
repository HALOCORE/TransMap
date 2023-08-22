function f_gold(degree, n) {
  var deg_sum = degree.reduce(function (a, b) {
    return a + b;
  });
  if (2 * (n - 1) == deg_sum) {
    return true;
  } else {
    return false;
  }
}

