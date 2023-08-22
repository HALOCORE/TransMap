function f_gold(n, r, b, g) {
  var fact = Array(n + 1).fill(0);
  fact[0] = 1;
  for (var i = 1; i <= n; i++) fact[i] = fact[i - 1] * i;
  var left = n - (r + g + b);
  var sum = 0;
  for (var i = 0; i <= left; i++) {
    for (var j = 0; j <= left - i; j++) {
      var k = left - (i + j);
      sum = sum + fact[n] / (fact[i + r] * fact[j + b] * fact[k + g]);
    }
  }
  return sum;
}

