
function f_gold(arr, n, m) {
  if (m == 0 || n == 0) return 0;
  arr.sort((a, b) => a-b);
  if (n < m) return -1;
  var min_diff = Number.MAX_VALUE;
  var first = 0;
  var last = 0;
  var i = 0;
  while (i + m - 1 < n) {
    var diff = arr[i + m - 1] - arr[i];
    if (diff < min_diff) {
      min_diff = diff;
      first = i;
      last = i + m - 1;
    }
    i += 1;
  }
  return arr[last] - arr[first];
}

