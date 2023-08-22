function f_gold(n) {
  var res = 1;
  while (n % 2 == 0) {
    n = n / 2;
  }
  for (var i = 3; i <= Math.sqrt(n) + 1; i++) {
    var count = 0;
    var curr_sum = 1;
    var curr_term = 1;
    while (n % i == 0) {
      count += 1;
      n = n / i;
      curr_term *= i;
      curr_sum += curr_term;
    }
    res *= curr_sum;
  }
  if (n >= 2) {
    res *= 1 + n;
  }
  return res;
}

