function f_gold(n) {
  var count = 0;
  var ans = 1;
  while (n % 2 == 0) {
    count += 1;
    n /= 2;
  }
  if (count % 2 != 0) ans *= 2;
  for (var i = 3; i <= Math.sqrt(n) + 1; i += 2) {
    count = 0;
    while (n % i == 0) {
      count += 1;
      n /= i;
    }
    if (count % 2 != 0) ans *= i;
  }
  if (n > 2) ans *= n;
  return ans;
}

