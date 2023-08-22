function f_gold(n) {
  let sum = 0;
  for (let row = 0; row < n; row++) sum = sum + (1 << row);
  return sum;
}

