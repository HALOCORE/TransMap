function f_gold(n) {
  n -= 1;
  var sum = 0;
  sum += (n * (n + 1)) / 2;
  sum += (n * (n + 1) * (2 * n + 1)) / 6;
  return Math.floor(sum);
}

