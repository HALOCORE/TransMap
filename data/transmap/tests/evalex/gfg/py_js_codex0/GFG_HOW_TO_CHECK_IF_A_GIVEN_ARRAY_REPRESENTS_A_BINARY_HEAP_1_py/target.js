function f_gold(arr, n) {
  for (var i = 0; i <= Math.floor((n - 2) / 2); i++) {
    if (arr[2 * i + 1] > arr[i]) return false;
    if (2 * i + 2 < n && arr[2 * i + 2] > arr[i]) return false;
  }
  return true;
}

