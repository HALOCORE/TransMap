function f_gold(a, b, k) {
  let p = Math.pow(a, b);
  let count = 0;
  while (p > 0 && count < k) {
    let rem = p % 10;
    count = count + 1;
    if (count == k) return rem;
    p = p / 10;
  }
}

