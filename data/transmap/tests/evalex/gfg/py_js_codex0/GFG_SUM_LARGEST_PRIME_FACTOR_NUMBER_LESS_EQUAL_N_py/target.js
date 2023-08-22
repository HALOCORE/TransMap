function f_gold(n) {
  var prime = Array(n + 1).fill(0);
  var sum = 0;
  var max = Math.floor(n / 2);
  for (var p = 2; p <= max; p++) {
    if (prime[p] == 0) {
      for (var i = p * 2; i <= n; i += p) prime[i] = p;
    }
  }
  for (var p = 2; p <= n; p++) {
    if (prime[p]) sum += prime[p];
    else sum += p;
  }
  return sum;
}

