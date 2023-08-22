function f_gold(num) {
  var result = 0;
  var i = 2;
  while (i <= Math.sqrt(num)) {
    if (num % i == 0) {
      if (i == num / i) result = result + i;
      else result = result + i + num / i;
    }
    i = i + 1;
  }
  return result + 1;
}

