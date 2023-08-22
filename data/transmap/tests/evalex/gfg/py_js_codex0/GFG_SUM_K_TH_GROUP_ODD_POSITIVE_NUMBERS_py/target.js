function f_gold(k) {
  var cur = Math.floor((k * (k - 1)) + 1);
  var sum = 0;
  while (k) {
    sum += cur;
    cur += 2;
    k = k - 1;
  }
  return sum;
}

