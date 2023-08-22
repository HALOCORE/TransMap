function f_gold(a, n, k) {
  let result = 0;
  for (let i = 0; i < n; i++) {
    if (a[i] != 1 && a[i] > k) result = (result + Math.min(a[i] % k, k - a[i] % k));
    else result = result + k - a[i];
  }
  return result;
}

