function f_gold(arr, n, k) {
  let max1 = Math.max(...arr);
  let res = 0;
  for (let i = 0; i < n; i++) {
    if ((max1 - arr[i]) % k != 0) return -1;
    else res += (max1 - arr[i]) / k;
  }
  return Math.floor(res);
}

