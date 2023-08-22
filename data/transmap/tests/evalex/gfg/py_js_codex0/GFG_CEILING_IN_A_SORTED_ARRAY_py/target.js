function f_gold(arr, low, high, x) {
  if (x <= arr[low]) return low;
  var i = low;
  for (i = 0; i < high; i++) {
    if (arr[i] == x) return i;
    if (arr[i] < x && arr[i + 1] >= x) return i + 1;
  }
  return -1;
}

