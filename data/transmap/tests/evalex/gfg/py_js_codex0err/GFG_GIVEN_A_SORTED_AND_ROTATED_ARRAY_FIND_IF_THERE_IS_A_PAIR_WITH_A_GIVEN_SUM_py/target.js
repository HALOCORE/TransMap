function f_gold(arr, n, x) {
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) break;
  }
  let l = (i + 1) % n;
  let r = i;
  while (l != r) {
    if (arr[l] + arr[r] == x) return true;
    if (arr[l] + arr[r] < x) l = (l + 1) % n;
    else r = (n + r - 1) % n;
  }
  return false;
}

