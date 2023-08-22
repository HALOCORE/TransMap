function f_gold(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) sum += i * (n - i);
  return 2 * sum;
}

