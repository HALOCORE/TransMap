function f_gold(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) sum = sum + (2 * i - 1) * (2 * i - 1);
  return sum;
}

