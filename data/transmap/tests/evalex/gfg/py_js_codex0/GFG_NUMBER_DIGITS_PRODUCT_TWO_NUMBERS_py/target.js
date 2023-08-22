function f_gold(a, b) {
  var count = 0;
  var p = Math.abs(a * b);
  if (p == 0) return 1;
  while (p > 0) {
    count = count + 1;
    p = Math.floor(p / 10);
  }
  return count;
}

