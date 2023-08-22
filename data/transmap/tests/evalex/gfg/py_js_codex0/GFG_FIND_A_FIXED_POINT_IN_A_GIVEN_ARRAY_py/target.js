function f_gold(arr, n) {
  for (let i = 0; i < n; i++) {
    if (arr[i] === i) return i;
  }
  return -1;
}

