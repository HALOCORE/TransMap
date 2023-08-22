function f_gold(arr, low, high) {
  let max = arr[low];
  let i = low;
  for (i = low; i <= high; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

