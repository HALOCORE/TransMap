function f_gold(n) {
  var count = 0;
  if (n % 2 == 0) {
    count = count + 1;
    while (n % 2 == 0) n = Math.floor(n / 2);
  }
  var i = 3;
  while (i <= Math.floor(Math.sqrt(n))) {
    if (n % i == 0) {
      count = count + 1;
      while (n % i == 0) n = Math.floor(n / i);
    }
    i = i + 2;
  }
  if (n > 2) count = count + 1;
  return count;
}

