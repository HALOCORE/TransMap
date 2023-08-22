function f_gold(n) {
  if (n <= 0) return 0;
  var fibo = new Array(n + 1);
  fibo[1] = 1;
  var sm = fibo[0] + fibo[1];
  for (var i = 2; i < n + 1; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
    sm = sm + fibo[i];
  }
  return sm;
}

