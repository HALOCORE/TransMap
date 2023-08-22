function f_gold(n) {
  let count = 0;
  let i = 5;
  while (n / i >= 1) {
    count += parseInt(n / i);
    i *= 5;
  }
  return parseInt(count);
}

