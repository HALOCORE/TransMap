function f_gold(arr, n) {
  let res = 0;
  for (let i = 0; i < n - 1; i++) res = res ^ (i + 1) ^ arr[i];
  res = res ^ arr[n - 1];
  return res;
}

