function f_gold(x, y, n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) sum += (Math.abs(x[i] - x[j]) + Math.abs(y[i] - y[j]));
  }
  return sum;
}

