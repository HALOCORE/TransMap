function f_gold(arr, n) {
  var min_prefix_sum = 0;
  var res = -Infinity;
  var prefix_sum = [];
  prefix_sum.push(arr[0]);
  for (var i = 1; i < n; i++) prefix_sum.push(prefix_sum[i - 1] + arr[i]);
  for (var i = 0; i < n; i++) {
    res = Math.max(res, prefix_sum[i] - min_prefix_sum);
    min_prefix_sum = Math.min(min_prefix_sum, prefix_sum[i]);
  }
  return res;
}

