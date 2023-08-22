function f_gold(n, k) {
  var p = 1;
  if (k % 2) p = - 1;
  return (Math.pow(n - 1, k) + p * (n - 1)) / n;
}

