function f_gold(arr, n) {
  arr.sort();
  var max_count = 1;
  var res = arr[0];
  var curr_count = 1;
  for (var i = 1; i < n; i++) {
    if (arr[i] == arr[i - 1]) curr_count += 1;
    else {
      if (curr_count > max_count) {
        max_count = curr_count;
        res = arr[i - 1];
      }
      curr_count = 1;
    }
  }
  if (curr_count > max_count) {
    max_count = curr_count;
    res = arr[n - 1];
  }
  return res;
}

