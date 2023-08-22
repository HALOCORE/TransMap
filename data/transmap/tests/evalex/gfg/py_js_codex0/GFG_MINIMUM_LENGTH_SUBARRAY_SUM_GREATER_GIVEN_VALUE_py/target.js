function f_gold(arr, n, x) {
  var curr_sum = 0;
  var min_len = n + 1;
  var start = 0;
  var end = 0;
  while(end < n) {
    while(curr_sum <= x && end < n) {
      curr_sum += arr[end];
      end += 1;
    }
    while(curr_sum > x && start < n) {
      if(end - start < min_len) min_len = end - start;
      curr_sum -= arr[start];
      start += 1;
    }
  }
  return min_len;
}

