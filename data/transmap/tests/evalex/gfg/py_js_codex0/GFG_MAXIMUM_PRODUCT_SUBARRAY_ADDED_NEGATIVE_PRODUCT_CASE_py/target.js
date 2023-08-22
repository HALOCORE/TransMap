function f_gold(arr, n) {
  var ans = -Infinity;
  var maxval = 1;
  var minval = 1;
  for (var i = 0; i < n; i++) {
    if (arr[i] > 0) {
      maxval = maxval * arr[i];
      minval = Math.min(1, minval * arr[i]);
    } else if (arr[i] == 0) {
      minval = 1;
      maxval = 0;
    } else if (arr[i] < 0) {
      var prevMax = maxval;
      maxval = minval * arr[i];
      minval = prevMax * arr[i];
    }
    ans = Math.max(ans, maxval);
    if (maxval <= 0) maxval = 1;
  }
  return ans;
}

