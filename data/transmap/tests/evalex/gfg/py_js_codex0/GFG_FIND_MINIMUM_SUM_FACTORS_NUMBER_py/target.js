function f_gold(num) {
  var sum = 0;
  var i = 2;
  while (i * i <= num) {
    while (num % i == 0) {
      sum += i;
      num /= i;
    }
    i += 1;
  }
  sum += num;
  return sum;
}

