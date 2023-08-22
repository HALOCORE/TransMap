function f_gold(arr, n) {
  if (n < 1) return false;
  var Min = Math.min.apply(null, arr);
  var Max = Math.max.apply(null, arr);
  if (Max - Min + 1 == n) {
    var visited = new Array(n).fill(false);
    for (var i = 0; i < n; i++) {
      if (visited[arr[i] - Min] != false) return false;
      visited[arr[i] - Min] = true;
    }
    return true;
  }
  return false;
}

