function f_gold(arr, n) {
  for (let i = 0; i < n; i++) {
    if (arr[i] & 1) arr[i] *= -1;
  }
  arr.sort((a, b) => a-b);
  for (let i = 0; i < n; i++) {
    if (arr[i] & 1) arr[i] *= -1;
  }
}

