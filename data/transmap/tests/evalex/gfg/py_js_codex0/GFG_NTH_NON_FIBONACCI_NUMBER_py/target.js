function f_gold(n) {
  let prevPrev = 1;
  let prev = 2;
  let curr = 3;
  while (n > 0) {
    prevPrev = prev;
    prev = curr;
    curr = prevPrev + prev;
    n = n - (curr - prev - 1);
  }
  n = n + (curr - prev - 1);
  return prev + n;
}

