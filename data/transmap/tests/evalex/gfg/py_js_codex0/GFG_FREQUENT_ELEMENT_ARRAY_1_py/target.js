function f_gold(arr, n) {
  var Hash = {};
  for (var i = 0; i < n; i++) {
    if (arr[i] in Hash) Hash[arr[i]] += 1;
    else Hash[arr[i]] = 1;
  }
  var max_count = 0;
  var res = -1;
  for (var i in Hash) {
    if (max_count < Hash[i]) {
      res = i;
      max_count = Hash[i];
    }
  }
  return res;
}

