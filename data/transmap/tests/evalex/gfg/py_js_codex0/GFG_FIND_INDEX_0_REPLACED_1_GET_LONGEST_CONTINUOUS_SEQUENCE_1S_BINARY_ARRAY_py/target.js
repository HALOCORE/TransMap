function f_gold(arr, n) {
  var max_count = 0;
  var max_index = 0;
  var prev_zero = - 1;
  var prev_prev_zero = - 1;
  for (var curr = 0; curr < n; curr++) {
    if (arr[curr] == 0) {
      if (curr - prev_prev_zero > max_count) {
        max_count = curr - prev_prev_zero;
        max_index = prev_zero;
      }
      prev_prev_zero = prev_zero;
      prev_zero = curr;
    }
  }
  if (n - prev_prev_zero > max_count) max_index = prev_zero;
  return max_index;
}

