function f_gold(n) {
  let count = 0;
  for (let curr = 0; curr < Number.MAX_SAFE_INTEGER; curr++) {
    let sum = 0;
    let x = curr;
    while (x) {
      sum = sum + x % 10;
      x = Math.floor(x / 10);
    }
    if (sum == 10) count = count + 1;
    if (count == n) return curr;
  }
  return -1;
}

