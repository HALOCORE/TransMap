function f_gold(n, p) {
  n = n % p;
  for (var x = 2; x < p; x++) {
    if ((x * x) % p == n) return true;
  }
  return false;
}

