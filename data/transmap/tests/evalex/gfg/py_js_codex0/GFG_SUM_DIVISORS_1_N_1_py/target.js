function f_gold(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) sum += Math.floor(n / i) * i;
  return Math.floor(sum);
}

