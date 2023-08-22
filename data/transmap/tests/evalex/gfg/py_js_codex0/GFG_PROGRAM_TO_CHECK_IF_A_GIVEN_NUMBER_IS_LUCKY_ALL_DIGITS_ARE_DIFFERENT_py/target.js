function f_gold(n) {
  var ar = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  while (n > 0) {
    var digit = Math.floor(n % 10);
    if (ar[digit]) return 0;
    ar[digit] = 1;
    n = n / 10;
  }
  return 1;
}

