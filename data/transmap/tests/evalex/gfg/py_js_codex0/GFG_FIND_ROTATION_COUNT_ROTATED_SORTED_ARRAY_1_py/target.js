function f_gold(arr, low, high) {
  if (high < low) return 0;
  if (high == low) return low;
  var mid = low + (high - low) / 2;
  mid = Math.floor(mid);
  if (mid < high && arr[mid + 1] < arr[mid]) return mid + 1;
  if (mid > low && arr[mid] < arr[mid - 1]) return mid;
  if (arr[high] > arr[mid]) return f_gold(arr, low, mid - 1);
  return f_gold(arr, mid + 1, high);
}

