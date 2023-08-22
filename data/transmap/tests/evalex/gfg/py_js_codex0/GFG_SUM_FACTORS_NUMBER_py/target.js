function f_gold(n) {
  var result = 0;
  for (var i = 2; i <= Math.sqrt(n) + 1; i++) {
    if (n % i == 0) {
      if (i == n / i) result = result + i;
      else result = result + i + n / i;
    }
  }
  return result + n + 1;
}

