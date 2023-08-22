function f_gold(arr, n, k) {
  var count = 0;
  for (var i = 0; i < n; i++) {
    if (arr[i] <= k) count = count + 1;
  }
  var bad = 0;
  for (var i = 0; i < count; i++) {
    if (arr[i] > k) bad = bad + 1;
  }
  var ans = bad;
  var j = count;
  for (var i = 0; i < n; i++) {
    if (j == n) break;
    if (arr[i] > k) bad = bad - 1;
    if (arr[j] > k) bad = bad + 1;
    ans = Math.min(ans, bad);
    j = j + 1;
  }
  return ans;
}

