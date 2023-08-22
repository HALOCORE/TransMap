function f_gold(num, divisor) {
  if (divisor == 0) return false;
  if (divisor < 0) divisor = -divisor;
  if (num < 0) num = -num;
  var i = 1;
  var product = 0;
  while (product <= num) {
    product = divisor * i;
    i += 1;
  }
  return num - (product - divisor);
}

