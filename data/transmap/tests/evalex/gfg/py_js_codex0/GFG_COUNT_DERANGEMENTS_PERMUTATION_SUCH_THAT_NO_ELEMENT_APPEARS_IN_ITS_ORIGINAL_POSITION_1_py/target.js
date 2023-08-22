function f_gold(n) {
  var der = Array(n + 1).fill(0);
  der[0] = 1;
  der[1] = 0;
  der[2] = 1;
  for (var i = 3; i <= n; i++) der[i] = (i - 1) * (der[i - 1] + der[i - 2]);
  return der[n];
}

