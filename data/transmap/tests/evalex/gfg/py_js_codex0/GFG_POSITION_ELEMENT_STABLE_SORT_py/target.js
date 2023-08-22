function f_gold(arr, n, idx) {
  var result = 0;
  for (var i = 0; i < n; i++) {
    if (arr[i] < arr[idx]) result += 1;
    if (arr[i] == arr[idx] && i < idx) result += 1;
  }
  return result;
}

