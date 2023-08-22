function f_gold(n, p) {
  var ans = 0;
  for (var x = 1; x < p; x++) {
    if ((x * x) % p == 1) {
      var last = x + p * (n / p);
      if (last > n) last -= p;
      ans += ((last - x) / p + 1);
    }
  }
  return Math.floor(ans);
}

