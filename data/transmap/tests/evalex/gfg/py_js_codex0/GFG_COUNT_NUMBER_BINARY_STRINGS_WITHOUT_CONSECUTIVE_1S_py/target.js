function f_gold(n) {
  let a = Array(n).fill(0);
  let b = Array(n).fill(0);
  a[0] = b[0] = 1;
  for (let i = 1; i < n; i++) {
    a[i] = a[i - 1] + b[i - 1];
    b[i] = a[i - 1];
  }
  return a[n - 1] + b[n - 1];
}

