function f_gold(arr, n) {
  var s = {};
  var count = 0;
  var maxm = -1000000000;
  var minm = 1000000000;
  for (var i = 0; i < n; i++) {
    s[arr[i]] = 1;
    if (arr[i] < minm) minm = arr[i];
    if (arr[i] > maxm) maxm = arr[i];
  }
  for (var i = minm; i <= maxm; i++) {
    if (!(i in s)) count++;
  }
  return count;
}

