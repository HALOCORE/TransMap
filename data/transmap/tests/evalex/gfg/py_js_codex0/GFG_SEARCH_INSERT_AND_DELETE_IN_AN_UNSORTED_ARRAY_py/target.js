function f_gold(arr, n, key) {
  for (let i = 0; i < n; i++) {
    if (arr[i] == key) return i;
  }
  return -1;
}

