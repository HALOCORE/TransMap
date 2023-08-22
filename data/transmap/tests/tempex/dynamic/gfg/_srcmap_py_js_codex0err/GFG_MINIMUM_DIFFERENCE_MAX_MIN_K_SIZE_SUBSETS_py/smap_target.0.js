function f_gold(arr, N, K) {
  arr.sort();
  var res = 2147483647;
  for (var i = 0; i < (N - K) + 1; i++) {
    var curSeqDiff = arr[i + K - 1] - arr[i];
    res = Math.min(res, curSeqDiff);
  }
  return res;
}

