function f_gold(arr, n) {
  var s = [];
  var first = 0;
  var second = 0;
  for (var i = 0; i < n; i++) {
    if (s.indexOf(arr[i]) == -1) {
      s.push(arr[i]);
      continue;
    }
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second) second = arr[i];
  }
  return first * second;
}

