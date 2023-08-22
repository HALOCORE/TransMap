function f_gold(n) {
  let arr = Array(n).fill(0).map(() => Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) arr[i][j] = Math.abs(i - j);
  }
  let sum = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) sum += arr[i][j];
  }
  return sum;
}

