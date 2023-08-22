function f_gold(n) {
  var maxPrime = -1;
  while (n % 2 == 0) {
    maxPrime = 2;
    n >>= 1;
  }
  for (var i = 3; i <= Math.sqrt(n) + 1; i += 2) {
    while (n % i == 0) {
      maxPrime = i;
      n = n / i;
    }
  }
  if (n > 2) maxPrime = n;
  return parseInt(maxPrime);
}

