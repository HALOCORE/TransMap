function f_gold(n) {
  if (n < 0) return 0;
  if (n <= 1) return 1;
  var x = (n * Math.log10(n / Math.e) + Math.log10(2 * Math.PI * n) / 2.0);
  return Math.floor(x) + 1;
}

