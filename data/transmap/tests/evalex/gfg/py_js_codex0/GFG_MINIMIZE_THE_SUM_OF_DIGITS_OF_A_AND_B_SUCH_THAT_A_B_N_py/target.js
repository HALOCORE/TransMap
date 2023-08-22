function f_gold(n) {
  var sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  if (sum == 1) {
    return 10;
  }
  return sum;
}

