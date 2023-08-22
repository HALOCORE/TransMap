function f_gold(arr, n) {
  var ans = 0;
  var maxele = Math.max.apply(null, arr);
  for (var i = 2; i <= maxele; i++) {
    var count = 0;
    for (var j = 0; j < n; j++) {
      if (arr[j] % i == 0) count++;
    }
    ans = Math.max(ans, count);
  }
  return ans;
}

