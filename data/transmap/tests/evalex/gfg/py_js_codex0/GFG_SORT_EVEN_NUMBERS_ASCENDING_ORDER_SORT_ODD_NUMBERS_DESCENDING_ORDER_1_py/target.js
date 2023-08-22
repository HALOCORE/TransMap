function f_gold(arr, n) {
  for (let i = 0; i < n; i++) {
    if (arr[i] & 1) arr[i] *= -1;
  }
  arr.sort();
  for (let i = 0; i < n; i++) {
    if (arr[i] & 1) arr[i] *= -1;
  }
}

