function f_gold(n) {
  var odd_count = 0;
  var even_count = 0;
  if (n < 0) n = -n;
  if (n == 0) return 1;
  if (n == 1) return 0;
  while (n) {
    if (n & 1) odd_count += 1;
    if (n & 2) even_count += 1;
    n = n >> 2;
  }
  return f_gold(Math.abs(odd_count - even_count));
}

