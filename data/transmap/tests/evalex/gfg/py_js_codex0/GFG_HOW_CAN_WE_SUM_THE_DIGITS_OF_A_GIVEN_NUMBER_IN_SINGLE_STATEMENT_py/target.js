function f_gold(n) {
  var sum = 0;
  while (n != 0) {
    sum = sum + parseInt(n % 10);
    n = parseInt(n / 10);
  }
  return sum;
}

