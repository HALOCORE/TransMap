
function f_gold(arr, n) {
  var res = -Number.MAX_VALUE - 1;
  for (var i = 0; i < n; i++) {
    var prefix_sum = arr[i];
    for (var j = 0; j < i; j++) prefix_sum += arr[j];
    var suffix_sum = arr[i];
    j = n - 1;
    while (j > i) {
      suffix_sum += arr[j];
      j -= 1;
    }
    if (prefix_sum == suffix_sum) res = Math.max(res, prefix_sum);
  }
  return res;
}

